document.addEventListener("DOMContentLoaded", function () {
  // Event listener untuk tombol Hitung
  document.getElementById("hitung").addEventListener("click", function () {
    // Ambil nilai input dari form
    let kwhAwal = parseFloat(document.getElementById("kwh-awal").value);
    let kwhAkhir = parseFloat(document.getElementById("kwh-akhir").value);
    let golonganTarif = parseFloat(document.getElementById("golongan-tarif").value);

    if (isNaN(kwhAwal) || isNaN(kwhAkhir) || golonganTarif === 0) {
      alert("Harap masukkan semua data dengan benar.");
      return;
    }

    // Menghitung konsumsi listrik
    let pemakaian = kwhAkhir - kwhAwal;
    let biaya = pemakaian * golonganTarif;

    // Menampilkan hasil
    document.getElementById("hasil").innerHTML = `
            <p>Total Pemakaian Listrik: ${pemakaian.toFixed(2)} kWh</p>
            <p>Total Biaya: Rp ${biaya.toFixed(2)}</p>
        `;
  });

  // Event listener untuk tombol Reset
  document.getElementById("resetBtn").addEventListener("click", function () {
    // Mengosongkan semua input form
    document.getElementById("kwh-awal").value = "";
    document.getElementById("kwh-akhir").value = "";
    document.getElementById("golongan-tarif").selectedIndex = 0; // Reset ke pilihan default

    // Mengosongkan hasil perhitungan
    document.getElementById("hasil").innerHTML = "";
  });
});
