document.addEventListener("DOMContentLoaded", function () {
  document.getElementById("hitung").addEventListener("click", function () {
    let kwhAwal = parseFloat(document.getElementById("kwh-awal").value);
    let kwhAkhir = parseFloat(document.getElementById("kwh-akhir").value);
    let golonganTarif = parseFloat(document.getElementById("golongan-tarif").value);

    if (isNaN(kwhAwal) || isNaN(kwhAkhir) || isNaN(golonganTarif)) {
      alert("Harap masukkan semua data dengan benar.");
      return;
    }

    if (kwhAwal > kwhAkhir) {
      alert("kWh awal tidak boleh lebih besar dari kWh akhir. Harap masukkan data yang valid.");
      return;
    }

    let pemakaian = kwhAkhir - kwhAwal;
    let biaya = pemakaian * golonganTarif;

    document.getElementById("hasil").innerHTML = `
          <p>Total Pemakaian Listrik: ${pemakaian.toFixed(2)} kWh</p>
          <p>Total Biaya Tagihan: Rp ${biaya.toFixed(2)}</p>
      `;
  });

  document.getElementById("resetBtn").addEventListener("click", function () {
    document.getElementById("kwh-awal").value = "";
    document.getElementById("kwh-akhir").value = "";
    document.getElementById("golongan-tarif").selectedIndex = 0;

    document.getElementById("hasil").innerHTML = "";
  });
});
