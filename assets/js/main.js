/**
 * FARKAN CONSULTANT - ARCHITECTURE | SIPIL | INTERIOR
 * Interactive Frontend JavaScript Engine
 */

document.addEventListener('DOMContentLoaded', () => {
  initNavbar();
  initMobileMenu();
  initHeroCarousel();
  initPortfolio();
  initModal();
  initConsultationForm();
  initFeedbackForm();
  initScrollAnimations();
});

/* ==========================================================================
   Project & Educational Database (farkanconsult.com & @farkan_consult)
   ========================================================================== */
const projectsData = {
  office_ruko: {
    id: 'office_ruko',
    title: 'Studio Kantor & Gallery FARKAN Design & Build — Cikampek',
    client: 'FARKAN Studio Showcase',
    location: 'Jl. Pawarengan, Dawuan Tengah, Cikampek, Karawang',
    category: 'commercial',
    categoryLabel: 'Kawasan Komersial & Kantor',
    concept: 'Modern Industrial Warm Lighting & Geometric Facade',
    year: '2026',
    scope: 'Arsitektur Fasad, Interior Showroom, Lighting & Signage 3D',
    images: [
      'assets/images/office_ruko_render.jpg',
      'assets/images/office_ruko_real.png',
      'assets/images/farkan_logo.png'
    ],
    excerpt: 'Desain kantor studio dan gallery showroom FARKAN Design & Build dengan perpaduan kisi-kisi kayu vertikal, signage akrilik 3D backlit, dan pencahayaan fasad warm white yang ikonik.',
    description: `Ini adalah kantor studio dan ruang galeri resmi FARKAN Design & Build yang berlokasi strategis di Jl. Pawarengan, Dawuan Tengah, Cikampek, Karawang.

Konsep Fasad & Pencahayaan:
Fasad gedung mengusung pendekatan Modern Contemporary Architecture dengan cladding kayu vertikal bernuansa cokelat hangat, dipadukan aksen lighting garis geometris (linear LED strip) yang memberikan visual dramatis saat senja hingga malam hari. 

Showroom & Area Konsultasi:
Pintu kaca frameless menyambut setiap calon klien ke dalam ruang konsultasi berdesain minimalis mewah, lengkap dengan meja resepsionis berlatar logo FARKAN berlampu backlight dan display sampel material premium.

Kehadiran kantor fisik ini menegaskan komitmen FARKAN dalam memberikan pelayanan profesional, transparan, dan terpercaya bagi masyarakat Karawang, Garut, dan Jawa Barat.`
  },

  limbangan: {
    id: 'limbangan',
    title: 'Perencanaan Rumah Tinggal — Limbangan Garut',
    client: 'Bpk. Trsna',
    location: 'Limbangan, Kab. Garut, Jawa Barat',
    category: 'residential',
    categoryLabel: 'Hunian & Perumahan',
    concept: 'Modern Tropical Contemporary',
    year: '2026',
    scope: 'Perencanaan Arsitektur, Struktur Sipil & 3D Rendering',
    images: [
      'assets/images/limbangan_1.jpg',
      'assets/images/limbangan_2.jpg',
      'assets/images/limbangan_3.jpg',
      'assets/images/limbangan_4.jpg',
      'assets/images/limbangan_5.jpg',
      'assets/images/limbangan_6.jpg',
      'assets/images/limbangan_7.jpg'
    ],
    excerpt: 'Hunian modern tropis yang memadukan garis arsitektur tegas dengan material alami kayu, batu alam, dan bukaan kaca besar untuk memaksimalkan sirkulasi udara di kawasan asri Garut.',
    description: `Hunian ini merupakan rumah tinggal pribadi milik Bapak Trsna yang berlokasi di Kecamatan Limbangan, Kabupaten Garut. Limbangan merupakan salah satu kawasan berkembang di Garut dengan lingkungan yang sejuk dan asri, menjadikannya lokasi yang sangat ideal untuk hunian modern yang tetap menyatu dengan alam.

Desain rumah mengusung konsep Modern Tropical Contemporary, yang memadukan garis arsitektur yang tegas dengan penggunaan material alami seperti elemen kayu, batu alam, dan bukaan kaca berukuran besar. Pendekatan ini tidak hanya menciptakan tampilan yang elegan dan berkelas, tetapi juga mampu memaksimalkan pencahayaan alami, sirkulasi udara, serta kenyamanan termal yang sesuai dengan iklim tropis Indonesia.

Fasad bangunan dirancang dengan komposisi geometris yang seimbang, diperkaya secondary skin berbahan kayu sebagai elemen estetika sekaligus pelindung dari paparan sinar matahari langsung. Balkon yang luas, taman hijau di sekeliling bangunan, serta area teras yang terbuka menghadirkan ruang transisi yang nyaman antara interior dan eksterior.`
  },

  karawang: {
    id: 'karawang',
    title: 'Kediaman Pribadi Modern Kontemporer — Karawang',
    client: 'Pak Fahmi',
    location: 'Dataran Karawang, Jawa Barat',
    category: 'residential',
    categoryLabel: 'Hunian & Perumahan',
    concept: 'Oase Arsitektur Modern & Harmoni Hijau',
    year: '2026',
    scope: 'Desain Arsitektur, Masterplan, Landscape & Konstruksi',
    images: [
      'assets/images/karawang_1.jpg',
      'assets/images/karawang_2.jpg',
      'assets/images/karawang_3.jpg',
      'assets/images/karawang_4.jpg'
    ],
    excerpt: 'Sebuah oase arsitektur modern yang menyelaraskan desain kontemporer, perpaduan panel beton abu-abu industrial dengan kehangatan kayu alami dan taman tropis rimbun.',
    description: `Ini adalah kediaman pribadi Pak Fahmi, sebuah oase arsitektur modern yang terletak strategis di dataran Karawang. Rumah ini bukan sekadar tempat tinggal, melainkan sebuah pernyataan gaya hidup yang menyelaraskan desain kontemporer dengan kenyamanan hidup tropis.

Fasad yang Memikat:
Dari kejauhan, rumah ini memancarkan karakter yang kuat dan elegan. Fasadnya merupakan perpaduan harmonis antara panel beton abu-abu industrial yang kokoh dengan kehangatan elemen kayu alami. Sentuhan arsitektur modern terlihat jelas pada penggunaan overhang atap yang menaungi area teras, menciptakan permainan bayangan dan cahaya yang dinamis sepanjang hari.

Harmoni Hijau dan Ruang Terbuka:
Dinding pembatas beton rendah yang bertekstur, dilengkapi pagar kayu berpola vertikal, memberikan privasi namun tetap terasa welcoming. Area carport luas dengan lantai exposed aggregate menampung kendaraan sementara taman depan tertata apik dengan tanaman tropis rimbun.`
  },

  interior_luxury: {
    id: 'interior_luxury',
    title: 'Interior Luxury "Oase Modern Minimalis"',
    client: 'Private Residence',
    location: 'Jawa Barat',
    category: 'interior',
    categoryLabel: 'Desain Interior',
    concept: 'Calm through Organization & Connection with Nature',
    year: '2026',
    scope: 'Interior Architecture, Custom Furniture, Lighting Design',
    images: [
      'assets/images/interior_1.png',
      'assets/images/interior_2.png'
    ],
    excerpt: 'Ruang privat yang dirancang dengan ubin travertine beige, pencahayaan berlapis (layered lighting), cermin LED backlight, partisi kaca frameless, dan wall-hung vanity.',
    description: `Selamat datang di ruang yang dirancang bukan sekadar untuk fungsi, melainkan sebagai tempat perlindungan pribadi—sebuah "Oase Modern Minimalis". Konsep ini memadukan kehangatan material alami dengan garis-garis bersih kontemporer, menciptakan suasana yang menenangkan sekaligus mewah.

Filosofi Desain:
Filosofi utama di balik desain ini adalah "Ketenangan melalui Organisasi" (Calm through Organization) dan "Koneksi dengan Alam". Setiap elemen dipilih untuk meminimalisir kekacauan visual, memaksimalkan ruang, dan menghadirkan tekstur yang menyentuh indera.

Elemen Kunci & Material:
• Palet Warna & Tekstur Hangat: Ubin porselen bertekstur batu travertine (beige) lembut pada lantai dan dinding utama.
• Pencahayaan Berlapis (Layered Lighting): Cermin bulat dengan backlight LED hangat untuk pencahayaan fokus, serta cove lighting LED strip tersembunyi.
• Partisi Kaca Frameless: Menghilangkan sekat visual sehingga ruangan terasa lapang dan lega.
• Wall-Hung Vanity & Toilet: Wastafel dan toilet gantung memberikan ilusi ruang luas dan sangat mudah dibersihkan.`
  },

  edu_japandi: {
    id: 'edu_japandi',
    title: 'Interior Konsep Japandi: Kehangatan Elemen Kayu',
    client: 'Edukasi & Tips Arsitektur',
    location: 'Instagram @farkan_consult',
    category: 'interior',
    categoryLabel: 'Desain Interior',
    concept: 'Japandi (Japanese - Scandinavian Fusion)',
    year: '2026',
    scope: 'Interior Styling & Material Harmonization',
    images: [
      'assets/images/interior_2.png',
      'assets/images/interior_1.png'
    ],
    excerpt: 'Perpaduan kesederhanaan Wabi-Sabi Jepang dengan kehangatan Hygge Skandinavia menghadirkan ketenangan jiwa di dalam rumah.',
    description: `Konsep Japandi adalah perpaduan harmonis antara estetika Jepang (Wabi-Sabi yang menghargai keaslian alam) dan Skandinavia (Hygge yang mengutamakan kenyamanan).

Karakteristik Utama:
• Penggunaan serat kayu berwarna terang (light oak, jati belanda, atau ash wood) yang tidak mengkilap (matte/natural finish).
• Palet warna netral yang menenangkan: beige, krem, abu-abu lembut, dan off-white.
• Furnitur fungsional dengan garis-garis sederhana, tanpa ornamen berlebih.
• Kehadiran tanaman hijau mini (bonsai, snake plant, atau monstera) sebagai aksen hidup yang menyegarkan.`
  },

  edu_glassblock: {
    id: 'edu_glassblock',
    title: 'Glass Block Corner Detail: Estetika Fasad & Privasi Ruang',
    client: 'Edukasi & Tips Arsitektur',
    location: 'Instagram @farkan_consult',
    category: 'facade',
    categoryLabel: 'Fasad & Material',
    concept: 'Daylighting with High Privacy Protection',
    year: '2026',
    scope: 'Arsitektur Fasad & Pencahayaan Alami',
    images: [
      'assets/images/karawang_3.jpg',
      'assets/images/karawang_4.jpg',
      'assets/images/karawang_1.jpg'
    ],
    excerpt: 'Material legendaris yang kembali menjadi tren arsitektur kontemporer: memasukkan cahaya matahari tanpa mengorbankan privasi penghuni.',
    description: `Glass block kini kembali menjadi elemen favorit para arsitek modern kontemporer untuk sudut fasad dan dinding pembatas.

Keunggulan Glass Block pada Desain FARKAN:
1. Privasi Terjaga: Mengaburkan pandangan dari luar sehingga orang tidak bisa melihat ke dalam, namun cahaya matahari tetap tembus 80%.
2. Insulasi Suara & Panas: Rongga vakum di dalam glass block membantu meredam kebisingan jalan dan menahan panas radiasi.
3. Nilai Estetika Retro-Modern: Tekstur kotak geometris memberikan pola bayangan cahaya yang dramatis dan instagramable di dalam ruangan sepanjang hari.`
  },

  komersial: {
    id: 'komersial',
    title: 'Perencanaan Kawasan Bisnis & Ruko Modern',
    client: 'Commercial Development',
    location: 'Karawang & Sekitarnya',
    category: 'commercial',
    categoryLabel: 'Kawasan Komersial',
    concept: 'Modern Commercial Hub & High-Traffic Architecture',
    year: '2026',
    scope: 'Masterplan Kawasan, Arsitektur Fasad Komersial, DED & Struktur',
    images: [
      'assets/images/office_ruko_render.jpg',
      'assets/images/office_ruko_real.png',
      'assets/images/hero_bg.png',
      'assets/images/project_alt.jpg'
    ],
    excerpt: 'Perencanaan dan pembangunan kawasan komersial modern, ruko, perkantoran, dan area usaha yang dirancang untuk meningkatkan aktivitas bisnis dan nilai investasi tinggi.',
    description: `Kami menghadirkan kawasan komersial yang modern, menarik, dan mampu meningkatkan aktivitas bisnis secara optimal. Setiap proyek komersial dirancang agar memiliki identitas visual yang kuat, sirkulasi pengunjung yang ergonomis, serta memberikan pengalaman terbaik bagi customer maupun penyewa.

Layanan mencakup perencanaan masterplan kawasan bisnis, desain arsitektur fasad ruko dan rukan, perhitungan struktur sipil berstandar tinggi, penataan zoning parkir dan sirkulasi kendaraan, hingga visualisasi 3D realistis untuk kebutuhan pemasaran properti.`
  },

  edu_material_adem: {
    id: 'edu_material_adem',
    title: 'Fasad Tropis & 5 Material Rumah Lebih Adem',
    client: 'Edukasi & Tips Arsitektur',
    location: 'Instagram @farkan_consult',
    category: 'facade',
    categoryLabel: 'Fasad & Material',
    concept: 'Thermal Comfort & Passive Cooling Design',
    year: '2026',
    scope: 'Pemilihan Material Ramah Iklim Tropis',
    images: [
      'assets/images/limbangan_3.jpg',
      'assets/images/limbangan_4.jpg',
      'assets/images/karawang_2.jpg'
    ],
    excerpt: 'Pemilihan material yang tepat mampu menurunkan suhu ruangan hingga 3-5°C secara alami tanpa bergantung penuh pada AC.',
    description: `Tips Memilih Material Bangunan Tropis agar Rumah Tetap Sejuk:

1. Batu Alam & Bata Ekspos: Memiliki massa termal tinggi yang menyerap panas di siang hari dan melepaskannya perlahan di malam hari saat udara sudah dingin.
2. Kayu Solid / Conwood: Material alami dengan konduktivitas termal rendah, ideal sebagai kisi-kisi (secondary skin) pelindung dinding dari radiasi matahari langsung.
3. Kaca Low-E (Low Emissivity): Meneruskan cahaya alami secara maksimal tanpa membawa panas radiasi berlebih ke dalam ruangan.
4. Ubin Granit / Terrazzo: Menyimpan suhu dingin dari tanah lantai bawah, memberikan sensasi sejuk saat diinjak.
5. Roster / Glass Block Ventilasi: Mengalirkan sirkulasi udara silang (cross-ventilation) secara terus-menerus sehingga udara panas tidak terjebak di dalam plafon.`
  },

  lighting_detail: {
    id: 'lighting_detail',
    title: 'Modern Lighting Architecture & Texture Detail',
    client: 'Luxury Residential Detail',
    location: 'Garut & Karawang',
    category: 'interior',
    categoryLabel: 'Desain Interior',
    concept: 'Concealed Architectural Cove Lighting',
    year: '2026',
    scope: 'Lighting Design & Material Detailing',
    images: [
      'assets/images/limbangan_6.jpg',
      'assets/images/interior_1.png',
      'assets/images/office_ruko_render.jpg'
    ],
    excerpt: 'Teknik pencahayaan tersembunyi (cove lighting) dan pemilihan tekstur dinding berkelas yang menghadirkan atmosfer mewah tanpa kesan berlebihan.',
    description: `Pencahayaan adalah nyawa dari arsitektur modern. Melalui penataan layered lighting (ambient, task, dan accent lighting), setiap sudut ruangan memiliki kedalaman visual dan atmosfer yang dapat disesuaikan.

Penggunaan cove lighting LED strip warm white (3000K) pada cerukan plafon dan dinding bertekstur menciptakan bias cahaya lembut yang memanjakan mata dan memberikan kesan ruang lebih tinggi dan luas.`
  },

  facade_tropical: {
    id: 'facade_tropical',
    title: 'Secondary Skin & Sun Shading Wood Louvers',
    client: 'Residential Project',
    location: 'Jawa Barat',
    category: 'facade',
    categoryLabel: 'Fasad & Material',
    concept: 'Bioclimatic Architecture',
    year: '2026',
    scope: 'Arsitektur Fasad & Pengendalian Termal',
    images: [
      'assets/images/limbangan_2.jpg',
      'assets/images/limbangan_7.jpg',
      'assets/images/office_ruko_render.jpg'
    ],
    excerpt: 'Sistem pelindung radiasi matahari vertikal berbahan kisi kayu yang menciptakan estetika bayangan dinamis di dalam ruang interior.',
    description: `Secondary skin berfungsi ganda: sebagai pelindung termal bangunan dari panas matahari langsung dan elemen estetika fasad kontemporer yang unik.

Dengan perhitungan sudut datang sinar matahari di Indonesia, kisi-kisi kayu dirancang dengan jarak presisi agar cahaya alami tetap masuk melimpah tanpa menaikkan suhu ruangan secara drastis.`
  },

  structural_ded: {
    id: 'structural_ded',
    title: 'Rekayasa Struktur Sipil & Gambar Kerja DED',
    client: 'Civil Engineering Standard',
    location: 'Karawang, Garut & Jabar',
    category: 'residential',
    categoryLabel: 'Hunian & Perumahan',
    concept: 'Earthquake Resistant Structural Analysis',
    year: '2026',
    scope: 'Perhitungan Struktur, Gambar DED & Rencana Anggaran Biaya',
    images: [
      'assets/images/karawang_2.jpg',
      'assets/images/limbangan_5.jpg',
      'assets/images/hero_feature.png'
    ],
    excerpt: 'Perhitungan pembesian struktur beton bertulang, pondasi tahan beban gempa SNI, dan penyusunan DED serta RAB presisi tanpa biaya tak terduga.',
    description: `FARKAN tidak hanya fokus pada estetika visual, melainkan juga keamanan jangka panjang melalui perhitungan struktur sipil yang presisi sesuai standar SNI bangunan tahan gempa.

Setiap paket perencanaan dilengkapi Gambar Kerja Teknis (Detail Engineering Design/DED) yang lengkap (Arsitektur, Struktur, MEP Listrik & Plumbing) serta Rencana Anggaran Biaya (RAB) riil yang transparan.`
  },

  landscape_terrace: {
    id: 'landscape_terrace',
    title: 'Tropical Landscape Terrace & Green Transition',
    client: 'Private Residence',
    location: 'Karawang & Garut',
    category: 'residential',
    categoryLabel: 'Hunian & Perumahan',
    concept: 'Seamless Indoor-Outdoor Living',
    year: '2026',
    scope: 'Desain Lanskap, Teras Terbuka & Penghijauan',
    images: [
      'assets/images/limbangan_7.jpg',
      'assets/images/karawang_4.jpg',
      'assets/images/limbangan_1.jpg'
    ],
    excerpt: 'Integrasi area teras terbuka dan taman tropis rimbun dengan pemilihan tanaman berkarakter seperti agave dan pakis sebagai oase hunian.',
    description: `Koneksi manusia dengan alam adalah kunci kenyamanan tempat tinggal. FARKAN merancang area transisi antara dalam dan luar ruangan (teras, balkon, courtyard) yang menyatu dengan lanskap hijau.

Pemilihan vegetasi berkarakter tropis seperti Agave, Monstera, dan Pakis memberikan kesegaran instan sekaligus meningkatkan kualitas udara di lingkungan sekitar rumah.`
  },

  villa_split_level: {
    id: 'villa_split_level',
    title: 'Luxury Modern Tropical Villa & Private Plunge Pool',
    client: 'Private Villa Client',
    location: 'Jawa Barat',
    category: 'residential',
    categoryLabel: 'Hunian & Perumahan',
    concept: 'Cantilevered Concrete & Tropical Oasis Living',
    year: '2026',
    scope: 'Desain Arsitektur, Kolam Renang, Lanskap & Struktur DED',
    images: [
      'assets/images/modern_villa_split.jpg?v=6.1',
      'assets/images/limbangan_1.jpg',
      'assets/images/karawang_1.jpg'
    ],
    excerpt: 'Villa modern tropis 2 lantai dengan balok kantilever ekspos, kisi-kisi kayu vertikal, dan private plunge pool berbalut taman tropis rimbun.',
    description: `Konsep Villa Mewah Tropis Kontemporer:
Proyek villa ini dirancang untuk menghadirkan pengalaman liburan privat terbaik bagi pemiliknya. Menggabungkan balok kantilever beton lantai dua yang melayang dramatis dengan tirai kisi-kisi kayu alami (secondary skin).

Kenyamanan & Pencahayaan:
Bukaan kaca geser selebar dinding utama mengintegrasikan ruang keluarga dengan kolam renang (plunge pool) dan dek kayu luar. Pencahayaan lansekap yang hangat di malam hari menciptakan atmosfer resort bintang lima yang privat dan tenang.`
  },

  kitchen_luxury_island: {
    id: 'kitchen_luxury_island',
    title: 'Custom Luxury Kitchen Set & Waterfall Marble Island',
    client: 'Residential Interior Project',
    location: 'Karawang & Garut',
    category: 'interior',
    categoryLabel: 'Desain Interior',
    concept: 'Sleek Dark Modern & Warm Marble Fusion',
    year: '2026',
    scope: 'Custom Cabinetry, Marble Countertop, Lighting & MEP Kitchen',
    images: [
      'assets/images/kitchen_island_luxury.jpg?v=6.1',
      'assets/images/interior_1.png',
      'assets/images/interior_2.png'
    ],
    excerpt: 'Desain dapur bersih (dry kitchen) modern mewah dengan meja island marmer putih waterfall, kabinet matte dark graphite, dan aksen pencahayaan LED warm.',
    description: `Dapur adalah jantung interaksi sebuah rumah modern. FARKAN merancang dapur kering (dry kitchen) yang memadukan fungsi memasak ergonomis dengan estetika ruang pamer yang elegan.

Keunggulan Desain:
• Meja Island Marmer Waterfall dengan pola urat alami yang mengalir hingga ke lantai.
• Kabinet Full-Height dengan material matte anti-fingerprint dan engsel soft-close premium.
• Pencahayaan Strip LED tersembunyi di bawah kabinet gantung untuk pencahayaan kerja yang optimal tanpa silau.
• Built-in Oven & Microwave cabinet yang rapi dan terintegrasi seamless.`
  },

  master_bedroom_suite: {
    id: 'master_bedroom_suite',
    title: 'Master Bedroom Suite & Acoustic Wood Paneling',
    client: 'Private Residence',
    location: 'Garut & Karawang',
    category: 'interior',
    categoryLabel: 'Desain Interior',
    concept: 'Warm Acoustic Fluted Paneling & Serene Atmosphere',
    year: '2026',
    scope: 'Interior Design, Custom Headboard, Layered Lighting',
    images: [
      'assets/images/master_bedroom_warm.jpg?v=6.1',
      'assets/images/interior_2.png',
      'assets/images/limbangan_6.jpg'
    ],
    excerpt: 'Kamar tidur utama dengan dinding panel kayu fluted berperedam suara, headboard LED backlight, dan bukaan kaca besar view taman privat.',
    description: `Kamar tidur utama dirancang sebagai tempat peristirahatan yang menghadirkan ketenangan optimal setelah seharian beraktivitas.

Fitur Desain:
1. Panel Dinding Akustik Fluted: Berbahan kayu walnut alami dengan celah peredam gema, menciptakan suasana ruangan yang tenang dan hangat.
2. Layered Headboard Lighting: Lampu LED tersembunyi di cerukan headboard memberikan cahaya lembut 2700K yang nyaman untuk membaca sebelum tidur.
3. Jendela Sudut Lantai-ke-Plafon: Menghubungkan pandangan langsung ke taman hijau luar dengan gorden sheer elegan untuk privasi.`
  },

  cafe_industrial_resto: {
    id: 'cafe_industrial_resto',
    title: 'The Social Grind Cafe & Commercial Facade Design',
    client: 'F&B Business Owner',
    location: 'Kawasan Komersial Karawang',
    category: 'commercial',
    categoryLabel: 'Kawasan Komersial',
    concept: 'Industrial Brick & Steel Glass Open Cafe',
    year: '2026',
    scope: 'Masterplan Fasad Komersial, Outdoor Seating, Zoning Barista',
    images: [
      'assets/images/cafe_commercial_modern.jpg?v=6.1',
      'assets/images/office_ruko_render.jpg',
      'assets/images/project_alt.jpg'
    ],
    excerpt: 'Konsep cafe dan resto industrial kekinian dengan kanopi baja hitam, pintu kaca frameless, dinding bata ekspos, dan area outdoor berkerikil tropis.',
    description: `Desain tempat usaha komersial yang menarik adalah kunci utama mendatangkan pengunjung. Proyek The Social Grind Cafe memadukan arsitektur industrial modern dengan nuansa hangat tropis.

Elemen Arsitektur Komersial:
• Fasad Baja Hitam & Bata Ekspos dengan kanopi overhang berlampu warm downlight.
• Area Outdoor Berkerikil (Gravel Patio) yang ramah resapan air dan dihiasi tanaman Monstera & Agave.
• Layout Sirkulasi Pelanggan & Barista yang ergonomis untuk efisiensi operasional F&B.`
  },

  bathroom_zen_powder: {
    id: 'bathroom_zen_powder',
    title: 'Luxury Master Bathroom & Floating Double Vanity',
    client: 'Private Luxury Residence',
    location: 'Jawa Barat',
    category: 'interior',
    categoryLabel: 'Desain Interior',
    concept: 'Zen Minimalist Stone & Skylight Sanctuary',
    year: '2026',
    scope: 'Sanitary Detailing, Marble Wall Niche, Skylight Framing',
    images: [
      'assets/images/bathroom_powder_luxury.jpg?v=6.1',
      'assets/images/interior_1.png',
      'assets/images/karawang_3.jpg'
    ],
    excerpt: 'Sanctuary kamar mandi mewah dengan dinding marmer hitam, double vanity kayu melayang, cermin bundar LED halo, dan freestanding bathtub di bawah skylight.',
    description: `Mengubah kamar mandi standar menjadi ruang spa privat di dalam rumah. FARKAN mengedepankan material batu alam marmer berkarakter kokoh dengan pencahayaan alami skylight.

Detail Spesifikasi:
• Freestanding Solid Surface Bathtub dengan kran standing matte black.
• Double Basin Wood Vanity melayang yang memudahkan pembersihan lantai.
• Cermin Bundar LED Halo Backlit dengan sensor sentuh anti-kabut.
• Cerukan Dinding (Wall Niche) berlampu warm LED untuk penyimpanan perlengkapan mandi secara rapi.`
  },

  compact_industrial_house: {
    id: 'compact_industrial_house',
    title: 'Compact 2-Story Industrial Minimalist Living',
    client: 'Urban Millennial Home',
    location: 'Karawang',
    category: 'residential',
    categoryLabel: 'Hunian & Perumahan',
    concept: 'Exposed Board-Formed Concrete & Wood Box Accent',
    year: '2026',
    scope: 'Arsitektur Kompak, Efisiensi Lahan Sempit, Struktur Tahan Gempa',
    images: [
      'assets/images/modern_compact_industrial.jpg?v=6.1',
      'assets/images/karawang_1.jpg',
      'assets/images/limbangan_1.jpg'
    ],
    excerpt: 'Solusi hunian kompak 2 lantai berkarakter industrial modern dengan dinding beton expose tekstur kayu, kusen baja hitam, dan deck kayu terbuka.',
    description: `Solusi cerdas bagi pemilik lahan terbatas di perkotaan yang mendambakan rumah dengan karakter arsitektur kuat dan minim perawatan (low maintenance).

Keunggulan Bangunan Kompak:
• Dinding Beton Expose Tekstur Kayu (Board-formed Concrete) yang kokoh dan tidak membutuhkan pengecatan ulang berkala.
• Pemanfaatan Sirkulasi Silang (Cross-ventilation) melalui bukaan jendela geser besar di lantai 1 dan balkon lantai 2.
• Penataan Ruang Open-Plan di lantai dasar yang menyatukan ruang tamu, makan, dan akses dek taman belakang.`
  },

  balcony_cantilever: {
    id: 'balcony_cantilever',
    title: 'Cantilevered Modern Balcony & Glass Railing View',
    client: 'Residential Project',
    location: 'Limbangan, Garut',
    category: 'facade',
    categoryLabel: 'Fasad & Material',
    concept: 'Floating Visual Perspective & Clean Line Railing',
    year: '2026',
    scope: 'Struktur Kantilever, Railing Kaca Tempered, Plafon Wood Panel',
    images: [
      'assets/images/limbangan_4.jpg',
      'assets/images/limbangan_1.jpg',
      'assets/images/modern_villa_split.jpg?v=6.1'
    ],
    excerpt: 'Detail balkon kantilever lantai atas dengan railing kaca tempered transparan yang memaksimalkan pemandangan lanskap pegunungan Garut yang asri.',
    description: `Balkon kantilever dirancang tanpa tiang penyangga bawah, memberikan kesan bangunan yang ringan dan melayang. Menggunakan sistem pembesian beton bertulang presisi sesuai standar teknik sipil FARKAN.`
  },

  living_warm_light: {
    id: 'living_warm_light',
    title: 'Open Space Living Room & Concealed Cove Lighting',
    client: 'Private Residence',
    location: 'Jawa Barat',
    category: 'interior',
    categoryLabel: 'Desain Interior',
    concept: 'Spacious Fluid Circulation & Ambient Warmth',
    year: '2026',
    scope: 'Interior Living & Dining, Plafon Drop Ceiling, Lighting',
    images: [
      'assets/images/limbangan_5.jpg',
      'assets/images/interior_2.png',
      'assets/images/kitchen_island_luxury.jpg?v=6.1'
    ],
    excerpt: 'Penataan ruang keluarga konsep open space tanpa sekat masif dengan drop ceiling berlampu cove tersembunyi untuk suasana berkumpul yang hangat.',
    description: `Konsep ruang keluarga modern tanpa sekat masif (open-plan) yang menghubungkan area santai dan ruang makan keluarga. Dilengkapi permainan ketinggian plafon drop-ceiling dengan pencahayaan cove tersembunyi ber-kelvin hangat.`
  },

  carport_exposed_aggregate: {
    id: 'carport_exposed_aggregate',
    title: 'Modern Carport Canopy & Exposed Aggregate Paving',
    client: 'Private Residence',
    location: 'Karawang',
    category: 'residential',
    categoryLabel: 'Hunian & Perumahan',
    concept: 'Durable Outdoor Hardscape & Integrated Planter',
    year: '2026',
    scope: 'Hardscape Carport, Saluran Drainase Resapan, Kanopi Solar Flat',
    images: [
      'assets/images/karawang_4.jpg',
      'assets/images/karawang_1.jpg',
      'assets/images/limbangan_2.jpg'
    ],
    excerpt: 'Desain area carport modern dengan lantai batu koral sikat exposed aggregate yang anti-licin, kanopi baja kokoh, dan border tanaman hias tropis.',
    description: `Area carport merupakan sambutan pertama pada sebuah hunian. Pemilihan material batu sikat agregat memberikan tekstur alami anti-selip sekaligus tahan beban kendaraan berat tanpa retak.`
  },

  boutique_office_facade: {
    id: 'boutique_office_facade',
    title: 'Fasad Ruko & Showroom Komersial Modern Glass',
    client: 'Commercial Investor',
    location: 'Jawa Barat',
    category: 'commercial',
    categoryLabel: 'Kawasan Komersial',
    concept: 'High Visibility Retail Facade & Signage Integration',
    year: '2026',
    scope: 'Fasad Komersial, Dinding Kaca Tempered, Perencanaan Signage 3D',
    images: [
      'assets/images/project_alt.jpg',
      'assets/images/office_ruko_render.jpg',
      'assets/images/cafe_commercial_modern.jpg?v=6.1'
    ],
    excerpt: 'Desain ruko dan showroom modern dengan dinding kaca penuh (curtain wall) yang memaksimalkan display produk dan meningkatkan prestige tempat usaha.',
    description: `Optimalisasi tampak depan bangunan usaha dengan komposisi bidang kaca tempered frameless, kanopi beton modern, dan area penempatan neon signage 3D yang eye-catching dari kejauhan.`
  },

  masterplan_residential: {
    id: 'masterplan_residential',
    title: 'Masterplan Tata Ruang Hunian Tumbuh Ramah Iklim',
    client: 'Development Planning',
    location: 'Karawang & Garut',
    category: 'residential',
    categoryLabel: 'Hunian & Perumahan',
    concept: 'Bioclimatic Zoning & Phased Construction Budgeting',
    year: '2026',
    scope: 'Masterplan Hunian, Zonasi Sirkulasi Angin, Analisis Cahaya',
    images: [
      'assets/images/hero_feature.png',
      'assets/images/karawang_2.jpg',
      'assets/images/limbangan_1.jpg'
    ],
    excerpt: 'Perencanaan tata letak hunian tumbuh yang memungkinkan pemilik rumah menambah ruang di masa depan secara bertahap tanpa merombak struktur utama.',
    description: `Perencanaan masterplan hunian tumbuh ramah iklim tropis. Struktur kolom dan pondasi dipersiapkan untuk penambahan lantai di masa depan sehingga menghemat biaya renovasi klien hingga 40%.`
  },

  facade_linear_accent: {
    id: 'facade_linear_accent',
    title: 'Architectural Lighting Exterior & Line Accent Detail',
    client: 'Studio & Commercial Showcase',
    location: 'Dawuan Tengah, Cikampek',
    category: 'facade',
    categoryLabel: 'Fasad & Material',
    concept: 'Nighttime Signature Illumination & Wood Cladding Accent',
    year: '2026',
    scope: 'Detailing Fasad Eksterior, Lighting Strip IP67, Signage Akrilik',
    images: [
      'assets/images/office_ruko_real.png',
      'assets/images/office_ruko_render.jpg',
      'assets/images/farkan_logo.png'
    ],
    excerpt: 'Studi pencahayaan fasad malam hari menggunakan LED strip linear warm white yang menegaskan siluet garis arsitektural gedung studio FARKAN.',
    description: `Aksen garis lampu linear luar ruangan bersertifikasi IP67 tahan cuaca hujan dan panas terik. Garis cahaya geometris ini menjadi ciri khas arsitektur modern yang memikat saat malam hari.`
  }
};

/* ==========================================================================
   Hero Showcase Carousel Slider Engine (Auto-rotates smoothly every 4.5s)
   ========================================================================== */
function initHeroCarousel() {
  const carousel = document.getElementById('heroCarousel');
  if (!carousel) return;

  const track = carousel.querySelector('.hero-slides-track');
  const slides = carousel.querySelectorAll('.hero-slide');
  const dotsContainer = document.getElementById('heroDots');
  const prevBtn = document.getElementById('heroPrevBtn');
  const nextBtn = document.getElementById('heroNextBtn');
  const progressBar = document.getElementById('heroProgressBar');

  if (!slides.length || !track) return;

  let currentIndex = 0;
  let isPaused = false;
  const SLIDE_DURATION = 4200; // 4.2 seconds
  let startTime = performance.now();
  let animationFrameId = null;

  // Build dots
  if (dotsContainer) {
    dotsContainer.innerHTML = '';
    slides.forEach((_, idx) => {
      const dot = document.createElement('span');
      dot.className = `hero-dot ${idx === 0 ? 'active' : ''}`;
      dot.addEventListener('click', (e) => {
        e.stopPropagation();
        goToSlide(idx);
      });
      dotsContainer.appendChild(dot);
    });
  }

  function updateDots() {
    if (!dotsContainer) return;
    const dots = dotsContainer.querySelectorAll('.hero-dot');
    dots.forEach((dot, idx) => {
      dot.classList.toggle('active', idx === currentIndex);
    });
  }

  function goToSlide(index) {
    slides[currentIndex].classList.remove('active');
    currentIndex = (index + slides.length) % slides.length;
    
    // Smooth horizontal slide using GPU translate3d
    track.style.transform = `translate3d(-${currentIndex * 100}%, 0, 0)`;
    
    slides[currentIndex].classList.add('active');
    updateDots();
    resetProgress();
  }

  function nextSlide() {
    goToSlide(currentIndex + 1);
  }

  function prevSlide() {
    goToSlide(currentIndex - 1);
  }

  function step(now) {
    if (!isPaused) {
      const elapsed = now - startTime;
      const progress = Math.min(100, (elapsed / SLIDE_DURATION) * 100);
      if (progressBar) {
        progressBar.style.width = `${progress}%`;
      }
      if (elapsed >= SLIDE_DURATION) {
        nextSlide();
        return;
      }
    }
    animationFrameId = requestAnimationFrame(step);
  }

  function startProgress() {
    startTime = performance.now();
    if (animationFrameId) cancelAnimationFrame(animationFrameId);
    animationFrameId = requestAnimationFrame(step);
  }

  function resetProgress() {
    if (progressBar) progressBar.style.width = '0%';
    startProgress();
  }

  if (prevBtn) {
    prevBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      prevSlide();
    });
  }

  if (nextBtn) {
    nextBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      nextSlide();
    });
  }

  // Pause on hover
  carousel.addEventListener('mouseenter', () => {
    isPaused = true;
  });

  carousel.addEventListener('mouseleave', () => {
    isPaused = false;
    startTime = performance.now();
  });

  // Touch swipe support (Mobile)
  let touchStartX = 0;
  let touchEndX = 0;

  carousel.addEventListener('touchstart', (e) => {
    touchStartX = e.changedTouches[0].screenX;
    isPaused = true;
  }, { passive: true });

  carousel.addEventListener('touchend', (e) => {
    touchEndX = e.changedTouches[0].screenX;
    isPaused = false;
    startTime = performance.now();
    if (touchStartX - touchEndX > 40) {
      nextSlide(); // swipe left
    } else if (touchEndX - touchStartX > 40) {
      prevSlide(); // swipe right
    }
  }, { passive: true });

  // Initial setup
  track.style.transform = 'translate3d(0, 0, 0)';
  slides[0].classList.add('active');
  resetProgress();
}

/* ==========================================================================
   Navigation & Sticky Header
   ========================================================================== */
function initNavbar() {
  const header = document.querySelector('.header');
  window.addEventListener('scroll', () => {
    if (window.scrollY > 40) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  });

  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.nav-link');

  window.addEventListener('scroll', () => {
    let current = '';
    sections.forEach(section => {
      const sectionTop = section.offsetTop - 120;
      const sectionHeight = section.offsetHeight;
      if (window.scrollY >= sectionTop && window.scrollY < sectionTop + sectionHeight) {
        current = section.getAttribute('id');
      }
    });

    navLinks.forEach(link => {
      link.classList.remove('active');
      if (link.getAttribute('href') === `#${current}`) {
        link.classList.add('active');
      }
    });
  });
}

/* ==========================================================================
   Mobile Menu Navigation
   ========================================================================== */
function initMobileMenu() {
  const menuToggle = document.querySelector('.menu-toggle');
  const navMenu = document.querySelector('.nav-menu');
  const navBackdrop = document.querySelector('.nav-backdrop');
  const navLinks = document.querySelectorAll('.nav-link, .nav-mobile-cta a');

  function closeMenu() {
    if (menuToggle) menuToggle.classList.remove('open');
    if (navMenu) navMenu.classList.remove('open');
    if (navBackdrop) navBackdrop.classList.remove('open');
    document.body.style.overflow = '';
  }

  if (menuToggle && navMenu) {
    menuToggle.addEventListener('click', () => {
      const isOpen = navMenu.classList.toggle('open');
      menuToggle.classList.toggle('open', isOpen);
      if (navBackdrop) navBackdrop.classList.toggle('open', isOpen);
      document.body.style.overflow = isOpen ? 'hidden' : '';
    });

    if (navBackdrop) {
      navBackdrop.addEventListener('click', closeMenu);
    }

    navLinks.forEach(link => {
      link.addEventListener('click', closeMenu);
    });
  }
}

/* ==========================================================================
   Portfolio Filtering & Load More Logic (Interactive Catalog Engine)
   ========================================================================== */
let portfolioState = {
  currentFilter: 'all',
  isAllExpanded: false,
  INITIAL_COUNT: 6
};

function renderPortfolioUI() {
  const items = document.querySelectorAll('.portfolio-item');
  const loadMoreContainer = document.getElementById('loadMoreContainer');
  let matchingItems = [];

  items.forEach(item => {
    const cat = item.getAttribute('data-category');
    if (portfolioState.currentFilter === 'all' || cat === portfolioState.currentFilter) {
      matchingItems.push(item);
    } else {
      item.classList.add('is-hidden');
      item.style.display = 'none';
      item.style.opacity = '0';
    }
  });

  matchingItems.forEach((item, index) => {
    if (portfolioState.currentFilter !== 'all' || portfolioState.isAllExpanded || index < portfolioState.INITIAL_COUNT) {
      item.classList.remove('is-hidden');
      item.style.display = 'flex';
      item.style.opacity = '1';
      item.style.transform = 'translateY(0)';
    } else {
      item.classList.add('is-hidden');
      item.style.display = 'none';
      item.style.opacity = '0';
    }
  });

  if (loadMoreContainer) {
    if (portfolioState.currentFilter === 'all') {
      loadMoreContainer.style.display = 'flex';
      if (portfolioState.isAllExpanded) {
        loadMoreContainer.innerHTML = `
          <div class="portfolio-loaded-notice">
            <span class="notice-badge">✨ Menampilkan Seluruh ${matchingItems.length} Katalog & Portofolio FARKAN</span>
            <button type="button" class="btn-collapse-catalog" onclick="collapsePortfolio(event)">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="18 15 12 9 6 15"></polyline></svg>
              <span>Tampilkan Lebih Ringkas</span>
            </button>
          </div>
        `;
      } else {
        loadMoreContainer.innerHTML = `
          <button id="loadMorePortfolioBtn" class="btn btn-gold btn-load-more" onclick="expandAllPortfolio(event)">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"></circle><polyline points="8 12 12 16 16 12"></polyline><line x1="12" y1="8" x2="12" y2="16"></line></svg>
            <span>Tampilkan Seluruh Katalog</span>
          </button>
        `;
      }
    } else {
      loadMoreContainer.style.display = 'none';
    }
  }
}

// Global functions for robust HTML onclick and programmatic access
window.expandAllPortfolio = function(e) {
  if (e) {
    e.preventDefault();
    e.stopPropagation();
  }
  portfolioState.isAllExpanded = true;
  renderPortfolioUI();

  // Smoothly scroll down to the newly revealed cards so user immediately sees them
  const items = document.querySelectorAll('.portfolio-item:not(.is-hidden)');
  if (items.length > 6 && items[6]) {
    setTimeout(() => {
      const headerOffset = 90;
      const elementPosition = items[6].getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }, 80);
  }
};

window.collapsePortfolio = function(e) {
  if (e) {
    e.preventDefault();
    e.stopPropagation();
  }
  portfolioState.isAllExpanded = false;
  renderPortfolioUI();

  // Smoothly scroll back to portfolio section header
  const section = document.getElementById('portofolio');
  if (section) {
    const headerOffset = 80;
    const elementPosition = section.getBoundingClientRect().top;
    const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
    window.scrollTo({
      top: offsetPosition,
      behavior: 'smooth'
    });
  }
};

function initPortfolio() {
  const filterBtns = document.querySelectorAll('.filter-btn');

  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      portfolioState.currentFilter = btn.getAttribute('data-filter') || 'all';
      renderPortfolioUI();
    });
  });

  // Initial render
  renderPortfolioUI();
}

/* ==========================================================================
   Project Detail Lightbox & Modal
   ========================================================================== */
let activeModalImages = [];
let currentImageIndex = 0;

function initModal() {
  const modalBackdrop = document.getElementById('projectModal');
  const closeBtn = document.querySelector('.modal-close');

  if (closeBtn && modalBackdrop) {
    closeBtn.addEventListener('click', closeModal);
    modalBackdrop.addEventListener('click', (e) => {
      if (e.target === modalBackdrop) {
        closeModal();
      }
    });

    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') closeModal();
    });
  }

  // Bind click on portfolio cards with data-id
  document.addEventListener('click', (e) => {
    const card = e.target.closest('[data-id]');
    if (card) {
      const pid = card.getAttribute('data-id');
      if (projectsData[pid]) {
        openProjectModal(projectsData[pid]);
      }
    }
  });
}

function openProjectModal(project) {
  const modalBackdrop = document.getElementById('projectModal');
  if (!modalBackdrop) return;

  activeModalImages = project.images;
  currentImageIndex = 0;

  document.getElementById('modalTag').textContent = project.categoryLabel;
  document.getElementById('modalTitle').textContent = project.title;
  document.getElementById('modalClient').textContent = project.client;
  document.getElementById('modalLocation').textContent = project.location;
  document.getElementById('modalConcept').textContent = project.concept;
  document.getElementById('modalScope').textContent = project.scope;
  document.getElementById('modalDescription').textContent = project.description;

  const mainImg = document.getElementById('modalMainImg');
  mainImg.src = activeModalImages[0];

  const thumbsContainer = document.getElementById('modalThumbs');
  thumbsContainer.innerHTML = '';

  activeModalImages.forEach((src, idx) => {
    const thumb = document.createElement('div');
    thumb.className = `modal-thumb-item ${idx === 0 ? 'active' : ''}`;
    thumb.innerHTML = `<img src="${src}" alt="Thumbnail ${idx + 1}">`;
    thumb.addEventListener('click', () => {
      currentImageIndex = idx;
      mainImg.src = src;
      document.querySelectorAll('.modal-thumb-item').forEach((t, i) => {
        t.classList.toggle('active', i === idx);
      });
    });
    thumbsContainer.appendChild(thumb);
  });

  const igBtn = document.getElementById('modalIgBtn');
  if (igBtn) {
    igBtn.href = project.instagramUrl || 'https://www.instagram.com/farkan_consult?stkn=eG5iMmtwcWc3b3Rt';
  }

  const waBtn = document.getElementById('modalWaBtn');
  if (waBtn) {
    const waText = encodeURIComponent(`Halo Farkan Consult, saya sangat tertarik dengan portofolio *${project.title}*. Boleh konsultasi lebih lanjut?`);
    waBtn.href = `https://wa.me/6285315153663?text=${waText}`;
  }

  modalBackdrop.classList.add('open');
  document.body.style.overflow = 'hidden';
}

function closeModal() {
  const modalBackdrop = document.getElementById('projectModal');
  if (modalBackdrop) {
    modalBackdrop.classList.remove('open');
    document.body.style.overflow = '';
  }
}

/* ==========================================================================
   Consultation Form Handler (Target WA: 0853-1515-3663)
   ========================================================================== */
function initConsultationForm() {
  const form = document.getElementById('consultForm');
  if (!form) return;

  form.addEventListener('submit', (e) => {
    e.preventDefault();

    const name = document.getElementById('formName').value.trim();
    const phone = document.getElementById('formPhone').value.trim();
    const service = document.getElementById('formService').value;
    const location = document.getElementById('formLocation').value.trim();
    const message = document.getElementById('formMessage').value.trim();

    if (!name || !phone) {
      alert('Mohon lengkapi nama dan nomor WhatsApp Anda.');
      return;
    }

    const waMessage = 
`*KONSULTASI PROYEK BARU - FARKAN CONSULT* 🏛️
-----------------------------------------
👤 *Nama Klien:* ${name}
📱 *No. WhatsApp:* ${phone}
🏷️ *Layanan yang Dibutuhkan:* ${service}
📍 *Lokasi Proyek / Lahan:* ${location || '-'}
📝 *Kebutuhan / Rencana:* 
${message || 'Saya ingin konsultasi mengenai desain dan estimasi biaya.'}
-----------------------------------------
Mohon info jadwal dan langkah konsultasinya. Terima kasih! 🙏`;

    const encoded = encodeURIComponent(waMessage);
    const waUrl = `https://wa.me/6285315153663?text=${encoded}`;
    
    window.open(waUrl, '_blank');
  });
}

/* ==========================================================================
   Customer Satisfaction Form Handler (Target WA: 085315153663 + Google Maps Booster)
   ========================================================================== */
function initFeedbackForm() {
  const starBtns = document.querySelectorAll('.rating-star-btn');
  const ratingInput = document.getElementById('feedbackRating');
  const ratingLabel = document.getElementById('ratingLabelText');
  const form = document.getElementById('feedbackForm');
  const starsWrap = document.querySelector('.rating-stars-wrap');

  const ratingDescriptions = {
    1: '1 Bintang - Perlu Perbaikan',
    2: '2 Bintang - Cukup',
    3: '3 Bintang - Baik',
    4: '4 Bintang - Sangat Baik & Memuaskan',
    5: '5 Bintang - Sempurna & Luar Biasa!'
  };

  let selectedRating = 5;

  function setStars(val) {
    const num = Math.max(1, Math.min(5, parseInt(val, 10) || 5));
    starBtns.forEach(s => {
      const sVal = parseInt(s.getAttribute('data-value'), 10);
      if (sVal <= num) {
        s.classList.add('active');
        s.classList.remove('inactive');
        s.textContent = '★';
        s.style.color = '#ffc107';
        s.style.textShadow = '0 0 16px rgba(255, 193, 7, 0.7)';
        s.style.transform = 'scale(1.15)';
      } else {
        s.classList.remove('active');
        s.classList.add('inactive');
        s.textContent = '☆';
        s.style.color = 'rgba(255, 255, 255, 0.22)';
        s.style.textShadow = 'none';
        s.style.transform = 'scale(1)';
      }
    });
    if (ratingLabel) {
      ratingLabel.textContent = ratingDescriptions[num] || `${num} Bintang`;
    }
  }

  if (starBtns.length) {
    // Initial display 5 stars
    setStars(5);
    if (ratingInput) ratingInput.value = 5;

    starBtns.forEach(btn => {
      const val = parseInt(btn.getAttribute('data-value'), 10);

      // Function to handle star selection
      const handleSelect = (e) => {
        if (e) {
          e.preventDefault();
          e.stopPropagation();
        }
        selectedRating = val;
        if (ratingInput) ratingInput.value = val;
        setStars(val);
      };

      // Click & Touch events
      btn.addEventListener('click', handleSelect);
      btn.addEventListener('touchend', handleSelect, { passive: false });

      // Hover preview (desktop)
      btn.addEventListener('mouseenter', () => {
        setStars(val);
      });
    });

    if (starsWrap) {
      starsWrap.addEventListener('mouseleave', () => {
        setStars(selectedRating);
      });
    }
  }

  // Setup Review Success & Google Maps Modal
  const successModal = document.getElementById('reviewSuccessModal');
  const successCloseBtn = document.getElementById('closeSuccessModalBtn');
  const successDoneBtn = document.getElementById('doneSuccessModalBtn');

  function closeSuccessModal() {
    if (successModal) {
      successModal.classList.remove('open');
      document.body.style.overflow = '';
    }
  }

  if (successCloseBtn) successCloseBtn.addEventListener('click', closeSuccessModal);
  if (successDoneBtn) successDoneBtn.addEventListener('click', closeSuccessModal);
  if (successModal) {
    successModal.addEventListener('click', (e) => {
      if (e.target === successModal) closeSuccessModal();
    });
  }

  if (form) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();

      const clientName = document.getElementById('fbName').value.trim();
      const projectName = document.getElementById('fbProject').value.trim();
      const rating = parseInt(document.getElementById('feedbackRating').value, 10) || selectedRating || 5;
      const ratingText = ratingDescriptions[rating] || `${rating} Bintang`;
      const qualityScore = document.getElementById('fbQuality').value;
      const timelineScore = document.getElementById('fbTimeline').value;
      const reviewText = document.getElementById('fbReview').value.trim();

      if (!clientName || !projectName) {
        alert('Mohon lengkapi Nama Anda dan Nama Proyek yang telah selesai.');
        return;
      }

      const starsDisplay = '⭐️'.repeat(rating);

      const reviewSnippet = reviewText || `Sangat puas dengan hasil perencanaan dan pengerjaan proyek dari tim FARKAN Consult. Desain inovatif, detail, dan pelayanan sangat profesional.`;

      const waMessage = 
`*SURVEI KEPUASAN & ULASAN KLIEN - FARKAN CONSULT* 🏛️✨
-----------------------------------------
👤 *Nama Klien / Instansi:* ${clientName}
📍 *Nama Proyek & Lokasi:* ${projectName}
⭐️ *Rating Kepuasan:* ${starsDisplay} (${ratingText})
📐 *Kualitas Desain & Struktur:* ${qualityScore}
⏱️ *Ketepatan & Komunikasi:* ${timelineScore}

💬 *Testimoni / Ulasan Klien:*
"${reviewSnippet}"
-----------------------------------------
Terima kasih atas kerja sama dan kepercayaannya bersama FARKAN Consult! 🙏`;

      // 1. Auto-Copy Review Text to Clipboard so client can easily paste into Google Maps
      if (navigator.clipboard && navigator.clipboard.writeText) {
        navigator.clipboard.writeText(reviewSnippet).catch(() => {});
      }

      // 2. Open WhatsApp to 085315153663
      const encoded = encodeURIComponent(waMessage);
      const waUrl = `https://wa.me/6285315153663?text=${encoded}`;
      window.open(waUrl, '_blank');

      // 3. Display Google Maps Review Booster Popup
      if (successModal) {
        document.getElementById('successClientName').textContent = clientName;
        document.getElementById('successRatingBadge').textContent = `${starsDisplay} (${ratingText})`;
        
        successModal.classList.add('open');
        document.body.style.overflow = 'hidden';
      }
    });
  }
}

/* ==========================================================================
   Scroll Reveal Animations
   ========================================================================== */
function initScrollAnimations() {
  const elements = document.querySelectorAll('.service-card, .step-card, .why-card');
  
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = '1';
        entry.target.style.transform = 'translateY(0)';
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1 });

  elements.forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(25px)';
    el.style.transition = 'all 0.6s cubic-bezier(0.16, 1, 0.3, 1)';
    observer.observe(el);
  });
}