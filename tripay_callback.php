<?php
/**
 * TriPay Webhook Bridge / Relay for FARKAN Consult & Kurtech Ecosystem
 * Relays instant payment notifications from TriPay to https://remote.kurtech.my.id/api/callback/tripay
 */

// Allow POST requests only
if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo json_encode(['success' => false, 'message' => 'Method Not Allowed']);
    exit;
}

// Get raw JSON payload
$rawInput = file_get_contents('php://input');

// Capture headers
$signature = $_SERVER['HTTP_X_CALLBACK_SIGNATURE'] ?? '';
$event = $_SERVER['HTTP_X_CALLBACK_EVENT'] ?? '';

// Destination target (Kurtech VPN Remote Backend)
$targetUrl = 'https://remote.kurtech.my.id/api/callback/tripay';

$ch = curl_init($targetUrl);
curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
curl_setopt($ch, CURLOPT_POST, true);
curl_setopt($ch, CURLOPT_POSTFIELDS, $rawInput);
curl_setopt($ch, CURLOPT_HTTPHEADER, [
    'Content-Type: application/json',
    'X-Callback-Signature: ' . $signature,
    'X-Callback-Event: ' . $event,
    'User-Agent: FarkanConsult-Tripay-Relay/1.0'
]);
curl_setopt($ch, CURLOPT_TIMEOUT, 15);
curl_setopt($ch, CURLOPT_SSL_VERIFYPEER, false);
curl_setopt($ch, CURLOPT_SSL_VERIFYHOST, false);

$response = curl_exec($ch);
$httpCode = curl_getinfo($ch, CURLINFO_HTTP_CODE);
curl_close($ch);

// Log to file if directory writable
$logData = date('Y-m-d H:i:s') . " | HTTP: $httpCode | Event: $event | Payload: " . substr($rawInput, 0, 150) . "\n";
@file_put_contents(__DIR__ . '/tripay_callback.log', $logData, FILE_APPEND);

// Return TriPay compatible response
header('Content-Type: application/json');
if ($httpCode >= 200 && $httpCode < 300) {
    echo $response ?: json_encode(['success' => true]);
} else {
    // If target is unreachable temporarily, acknowledge to TriPay to prevent endless retries
    echo json_encode(['success' => true, 'relayed' => false, 'code' => $httpCode]);
}