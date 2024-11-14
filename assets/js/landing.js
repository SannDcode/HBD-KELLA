Swal.fire({
  title: 'HBD Kella Amalii_<',
  text: 'Maaf Iaak Telat Ngasih Surprisenya hehe',
  imageUrl: 'assets/gif/hello.gif',
  imageHeight: "200px",
  imageAlt: 'Pentol Hallo',
  confirmButtonText: 'Okeey, GPP KOQ!',
  customClass: {
    popup: 'small-popup', // Menambahkan kelas khusus untuk popup
    title: 'small-title', // Menambahkan kelas khusus untuk judul
    text: 'small-text',   // Menambahkan kelas khusus untuk teks
    confirmButton: 'small-button', // Menambahkan kelas khusus untuk tombol
    image: 'center-image' // Menambahkan kelas khusus untuk gambar
  }
  });
  
  // CSS tambahan
  const style = document.createElement('style');
  style.innerHTML = `
    .small-popup {
      height: auto; /* Menentukan lebar notifikasi */
      padding: 10px; /* Menyesuaikan padding */
    }
    .small-title {
      font-size: 18px; /* Mengubah ukuran font judul */
    }
    .small-text {
      font-size: 14px; /* Mengubah ukuran font teks */
    }
    .small-button {
      padding: 5px 10px; /* Menyesuaikan padding tombol */
      font-size: 14px;   /* Mengubah ukuran font tombol */
      background-color: #eea1cd; /* Mengubah warna background tombol */
    }
    .center-image {
    display: block;
    margin-left: auto;
    margin-right: auto;
    margin-bottom: 10px; /* Jarak antara gambar dan teks */
    }
  `;
  document.head.appendChild(style);
  