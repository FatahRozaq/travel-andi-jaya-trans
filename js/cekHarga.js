const dataPerjalanan = {
    bandung: {
        Tasikmalaya: 175000,
        // Garut: 175000,
        Ciamis: 200000,
        // Pangandaran: 200000,
        // Banjar: 200000,
        Karawang: 225000,
        Cikarang: 225000,
        Bekasi: 225000,
        Jakarta: 250000,
        Depok: 240000,
        Bogor: 250000,
        Tangerang: 250000,
        "Bandara Halim": 240000,
        "Bandara Soekarno": 250000
    },
    tasikmalaya: {
        Bandung: 175000,
        // Garut: 175000,
        Karawang: 250000,
        Cikarang: 250000,
        Bekasi: 250000,
        Jakarta: 275000,
        Depok: 275000,
        Bogor: 275000,
        Tangerang: 275000,
        "Bandara Halim": 275000,
        "Bandara Soekarno": 275000
    },
    ciamis: {
        Bandung: 200000,
        // Garut: 200000,
        Karawang: 250000,
        Cikarang: 250000,
        Bekasi: 250000,
        Jakarta: 275000,
        Depok: 275000,
        Bogor: 275000,
        Tangerang: 275000,
        "Bandara Halim": 275000,
        "Bandara Soekarno": 300000
    }
};

// Mengisi select box asal dengan data
function populateAsal() {
    const asalSelect = document.getElementById("asal");
    asalSelect.innerHTML = '<option value="" disabled selected>Pilih Rute</option>';
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

// Format angka ke format rupiah
function formatRupiah(angka) {
    return "Rp" + angka.toLocaleString("id-ID");
}

// Update harga berdasarkan pilihan asal dan tujuan
function updateHarga() {
    const asal = document.getElementById("asal").value;
    const tujuan = document.getElementById("tujuan").value;
    const hargaInput = document.getElementById("harga");

    // Cek apakah asal dan tujuan ada dalam data
    if (dataPerjalanan[asal] && dataPerjalanan[asal][tujuan]) {
        hargaInput.value = formatRupiah(dataPerjalanan[asal][tujuan]);
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