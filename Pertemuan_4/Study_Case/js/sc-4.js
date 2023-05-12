var btn_tarik = document.getElementById("btn_tarik");
btn_tarik.style.display = "none";

function setor() {
  var setor = prompt("Masukan Nominal Yang Ingin Disetor");
  var saldo = parseInt(document.getElementById("saldo_masuk").value);

  if (setor != 0 || setor != "") {
    if (setor <= 0) {
      alert("Nominal Kurang");
    } else if (!isNaN(setor)) {
      if (saldo >= "0") {
        //! Jika Saldo Sudah Ada (Lebih Dari 0)
        saldo = setor;
        var sd = document.getElementById("total_saldo").value;
        if (confirm("Apakah Kamu Yakin Ingin Setor Saldo ?") == true) {
          var ts = parseInt(sd) + parseInt(setor);
          document.getElementById("total_saldo").value = ts;
          document.getElementById("saldo_masuk").value = saldo;
          alert("Saldo Berhasil Ditambahkan");
        } else {
          alert("Saldo Gagal Ditambahkan");
        }
      } else {
        //! Jika Saldo Belum Ada Sama Sekali Alias 0
        saldo = setor;
        if (confirm("Apakah Kamu Yakin Ingin Setor Saldo ?") == true) {
          document.getElementById("saldo_masuk").value = saldo;
          document.getElementById("total_saldo").value = saldo;
          btn_tarik.style.display = "inline-block";
          alert("Saldo Berhasil Ditambahkan");
        } else {
          alert("Saldo Gagal Ditambahkan");
        }
      }
    } else {
      alert("Inputan Hanya Berupa Angka (Tidak Boleh Huruf)");
    }
  } else {
    alert("Input Tidak Boleh Kosong");
  }
}

function tarik() {
  var tarik = prompt("Masukan Nominal Yang Ingin Ditarik");
  var saldo = parseInt(document.getElementById("saldo_keluar").value);
  var total_saldo = parseInt(document.getElementById("total_saldo").value);
  if (tarik != 0 || tarik != "") {
    if (tarik <= 0) {
      alert("Nominal Kurang");
    } else if (!isNaN(tarik)) {
      if (Number(tarik) >= total_saldo) {
        alert("Total Saldo Tidak Mencukupi");
      } else {
        saldo = tarik;
        var sd = document.getElementById("total_saldo").value;
        if (confirm("Apakah Kamu Yakin Ingin Manarik Saldo ?") == true) {
          var ts = parseInt(sd) - parseInt(tarik);
          document.getElementById("total_saldo").value = ts;
          document.getElementById("saldo_keluar").value = saldo;
          alert("Saldo Berhasil Ditarik");
        } else {
          alert("Saldo Gagal Ditarik");
        }
      }
    } else {
      alert("Inputan Hanya Berupa Angka (Tidak Boleh Huruf)");
    }
  } else {
    alert("Input Tidak Boleh Kosong");
  }
}
