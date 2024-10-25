// Data perjalanan dan harga
const dataPerjalanan = {
    bandung: {
        Tasikmalaya: "175K",
        Garut: "175K",
        Ciamis: "200K",
        Pangandaran: "200K",
        Banjar: "200K",
        Karawang: "225K",
        Cikarang: "225K",
        Bekasi: "225K",
        Jakarta: "250K",
        Depok: "240K",
        Bogor: "250K",
        Tangerang: "250K",
        "Bandara Halim": "240K",
        "Bandara Soekarno": "250K"
    },
    tasikmalaya: {
        Bandung: "175K",
        Garut: "175K",
        Karawang: "250K",
        Cikarang: "250K",
        Bekasi: "250K",
        Jakarta: "275K",
        Depok: "275K",
        Bogor: "275K",
        Tangerang: "275K",
        "Bandara Halim": "275K",
        "Bandara Soekarno": "275K"
    },
    ciamis: {
        Bandung: "200K",
        Garut: "200K",
        Karawang: "250K",
        Cikarang: "250K",
        Bekasi: "250K",
        Jakarta: "275K",
        Depok: "275K",
        Bogor: "275K",
        Tangerang: "275K",
        "Bandara Halim": "275K",
        "Bandara Soekarno": "300K"
    }
};

// Mengisi select box asal dengan data
function populateAsal() {
    const asalSelect = document.getElementById("asal");
    asalSelect.innerHTML = '<option value="" disabled selected>Pilih Asal</option>';
    for (const asal in dataPerjalanan) {
        asalSelect.innerHTML += `<option value="${asal}">${capitalizeFirstLetter(asal)}</option>`;
    }
}

// Mengisi select box tujuan berdasarkan pilihan asal
function populateTujuan() {
    const asal = document.getElementById("asal").value;
    const tujuanSelect = document.getElementById("tujuan");
    
    // Reset tujuan select box
    tujuanSelect.innerHTML = '<option value="" disabled selected>Pilih Tujuan</option>';

    // Jika asal valid, masukkan opsi tujuan
    if (dataPerjalanan[asal]) {
        for (const tujuan in dataPerjalanan[asal]) {
            tujuanSelect.innerHTML += `<option value="${tujuan}">${tujuan}</option>`;
        }
    }
}

// Update harga berdasarkan pilihan asal dan tujuan
function updateHarga() {
    const asal = document.getElementById("asal").value;
    const tujuan = document.getElementById("tujuan").value;
    const hargaInput = document.getElementById("harga");

    // Cek apakah asal dan tujuan ada dalam data
    if (dataPerjalanan[asal] && dataPerjalanan[asal][tujuan]) {
        hargaInput.value = dataPerjalanan[asal][tujuan];
    } else {
        hargaInput.value = "Harga tidak ditemukan";
    }
}

// Fungsi untuk capitalize string
function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

// Memanggil fungsi populateAsal saat halaman dimuat
document.addEventListener("DOMContentLoaded", function() {
    populateAsal();
});