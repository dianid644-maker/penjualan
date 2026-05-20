
function beli(nama) {
  alert("Anda memilih " + nama + ". Lanjut ke halaman pembelian.");
}

function keProduk() {
  document.getElementById("produk").scrollIntoView({
    behavior: "smooth"
  });
}


function pesan(event) {
  event.preventDefault();

  let nama = document.getElementById("nama").value;
  let kopi = document.getElementById("kopi").value;
  let jumlah = document.getElementById("jumlah").value;

  alert(
    "Terima kasih " + nama +
    "\nPesanan: " + kopi +
    "\nJumlah: " + jumlah +
    "\nPesanan Anda sedang diproses ☕"
  );
}

function kembali() {
  window.location.href = "kopi.html";
}
