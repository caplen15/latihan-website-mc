// Counter animation untuk statistik
document.addEventListener('DOMContentLoaded', function() {
  const counters = document.querySelectorAll('.counter');
  const speed = 200;

  counters.forEach(counter => {
    const updateCount = () => {
      const target = +counter.getAttribute('data-target');
      const count = +counter.innerText;
      const increment = target / speed;

      if (count < target) {
        counter.innerText = Math.ceil(count + increment);
        setTimeout(updateCount, 10);
      } else {
        counter.innerText = target;
      }
    };
    updateCount();
  });
});

// Form Kontak Handler
const form = document.getElementById("formKontak");
if (form) {
  form.addEventListener("submit", function (event) {
    event.preventDefault();
    
    let valid = true;
    const errorMsg = document.getElementById("errorMsg");
    
    // Validasi Nama
    const nama = document.getElementById("nama");
    if (nama.value.trim() === "") {
      showError("Nama wajib diisi.");
      valid = false;
    }
    
    // Validasi Email
    const email = document.getElementById("email");
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email.value)) {
      showError("Email tidak valid.");
      valid = false;
    }
    
    // Validasi Tanggal
    const tanggal = document.getElementById("tanggal");
    if (tanggal.value === "") {
      showError("Tanggal harus dipilih.");
      valid = false;
    }
    
    // Validasi Nomor HP
    const nomer = document.getElementById("nomer");
    if (nomer.value === "" || nomer.value.length < 10) {
      showError("Nomor HP harus diisi dengan minimal 10 digit.");
      valid = false;
    }
    
    // Validasi Lokasi
    const lokasi = document.getElementById("lokasi");
    if (lokasi.value.trim() === "") {
      showError("Lokasi harus diisi.");
      valid = false;
    }
    
    if (valid) {
      errorMsg.style.color = "green";
      errorMsg.textContent = "Pesan berhasil dikirim! Kami akan segera menghubungi Anda.";
      form.reset();
      setTimeout(() => {
        errorMsg.textContent = "";
      }, 5000);
    }
  });
  
  function showError(message) {
    const errorMsg = document.getElementById("errorMsg");
    errorMsg.style.color = "red";
    errorMsg.textContent = message;
  }
}

// Form Estimasi Handler
const formEstimasi = document.getElementById("formEstimasi");
if (formEstimasi) {
  formEstimasi.addEventListener("submit", function (e) {
    e.preventDefault();
    
    const harga = parseFloat(document.getElementById("harga").value);
    const durasi = parseFloat(document.getElementById("durasi").value);
    const hasil = document.getElementById("hasil");
    
    if (harga > 0 && durasi > 0) {
      const total = harga * durasi;
      hasil.textContent = "Total Biaya: Rp. " + total.toLocaleString('id-ID');
      hasil.style.color = "#532a10";
      hasil.style.fontWeight = "bold";
      hasil.style.fontSize = "1.3rem";
      hasil.marginTop = "20px";
    } else {
      hasil.textContent = "Masukkan nilai yang valid.";
      hasil.style.color = "red";
    }
  });
}