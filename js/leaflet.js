// Koordinat alamat yang akan ditampilkan (contoh: Jakarta)
const latitude = -6.200000;  // Latitude Jakarta
const longitude = 106.816666;  // Longitude Jakarta

// Inisialisasi peta dengan tampilan awal pada koordinat yang ditentukan
const map = L.map('map').setView([latitude, longitude], 13);

// Tambahkan tile layer dari OpenStreetMap
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '© OpenStreetMap contributors'
}).addTo(map);

// Tambahkan marker di lokasi alamat
L.marker([latitude, longitude]).addTo(map)
    .bindPopup("<b>Alamat di Sini</b><br>Deskripsi Alamat.")
    .openPopup();
