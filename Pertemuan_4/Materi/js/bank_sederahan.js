//* Immediately Function Invoked
let funBankOnline = (function () {
  let saldo = 0;
  return function main() {
    alert("Selamat Datang Di Mbanking");
    let menu = prompt(
      "Daftar Menu : \n1. Cek Saldo\n2. Tarik Tunai\n3. Setor Tunai"
    );

    if (menu == 1) {
      alert("Saldo Anda : " + saldo);
    } else if (menu == 2) {
      let tarik_saldo = parseInt(prompt("Masukkan Saldo Penarikan : "));
      if (tarik_saldo > saldo) {
        alert("Saldo Anda Tidak Mencukupi");
      } else {
        if (isNaN(tarik_saldo)) {
          alert("Input Bukan Angka ! Silahkan Masukan Angka");
        } else {
          saldo -= tarik_saldo;
          alert("Selamat Anda Berhasil Menarik Saldo");
        }
      }
    } else if (menu == 3) {
      let setor_tunai = parseInt(prompt("Masukkan Nominal Setor Tunai : "));
      if (setor_tunai <= 0) {
        alert("Saldo Anda Tidak Mencukupi");
      } else {
        if (isNaN(setor_tunai)) {
          alert("Input Bukan Angka ! Silahkan Masukan Angka");
        } else {
          saldo += setor_tunai;
          alert("Selamat Anda Berhasil Setor Tunai");
        }
      }
    } else {
      alert("Input Yang Anda Lakukan Salah");
    }

    let kondisi = confirm("Anda Ingin Lanjut ?");
    if (kondisi) {
      return main();
    } else {
      return alert("Terima Kasih Telah Menggunakan Layanan Kami");
    }
  };
})();

funBankOnline();
