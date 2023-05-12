//* Metode External js
// console.log('Ini Metode External JS');

//TODO: TIPE DATA

//! Tipe Data String JS
// console.log("Ini Tipe Data String");

//! Tipe Data Number JS
//? Bulat
// console.log(2);
//? Dicimal
// console.log(2.23);

//! Tipe Data Bolean JS
// console.log(false);
// console.log(true);

//TODO: VARIABEL

// let nama_depan = 'Naufal';
// let nama_tengah = 'Hadi';
// let nama_belakang = 'Putra';

// console.log(nama_depan + ' ' + nama_tengah + ' ' + nama_belakang);

//TODO: OPERATOR

//* Aritmatika

// console.log(20 + 20); //? Tambah
// console.log(20 - 5); //? Kurang
// console.log(20 * 20); //? Kali
// console.log(20 / 5); //? Bagi
// console.log(24 % 16); //? Modulus (Sisa Bagi)

//* Penugasan

// let angka = 10;

//! angka = angka (10) + 20;
// angka += 20; //? Assigment
// console.log(angka);

//* Perbandingan

// console.log(20 === 18); //? false
// console.log(20 === 20); //? true
// console.log(20 < 18); //? false
// console.log(20 > 18); //? true

//* Logika

//! AND (&&)
// console.log(true && true); //? true (Jika kedua nilai adalah true (benar) maka hasilnya adalah true)
// console.log(false && true); //? false (Jika salah satu nilai adalah false (salah) maka hasilnya adalah false)
// console.log(true && false); //? false
// console.log(false && false); //? false (Jika kedua nilai adalah false (salah) maka hasilnya adalah false)

//! OR (||)
// console.log(true || true); //? true (Jika kedua nilai adalah true (benar) maka hasilnya adalah true)
// console.log(false || true); //? true (Jika salah satu nilai adalah true (benar) maka hasilnya adalah true)
// console.log(true || false); //? true
// console.log(false || false); //? false (Jika kedua nilai adalah false (salah) maka hasilnya adalah false)

//! NOT (!)
// console.log(!true); //? false (Kebalikan dari true (benar))
// console.log(!false); //? true (Kebalikan dari false (salah))

//TODO: CONDITION

//* IF ELSE

// let angka = 10;
// if (angka > 20) {
//   //? Jika angka (10) lebih kecil dari 20 maka hasil nya adalah 'Benar'
//   console.log("Benar");
// } else {
//   //? Jika angka (10) lebih besar dari 20 maka hasil nya adalah 'Salah'
//   console.log("Salah");
// }

//* NESTED IF

// let nama = "bulan";

// if (nama === "naufal") {
//   //? Perintah ini akan dieksekusi jika nama = naufal
//   console.log("naufal");
// } else if (nama === "jajang") {
//   //? Perintah ini akan dieksekusi jika nama = jajang
//   console.log("jajang");
// } else if (nama === "bulan") {
//   //? Perintah ini akan dieksekusi jika nama = bulan
//   console.log("bulan");
// } else {
//   //? Perintah ini akan dieksekusi jika nama tidak ada di dalam kondisi
//   console.log("Tidak Dikenal !");
// }

//* SWITCH CASE

// let warna = "abu-abu";
// switch (warna) {
//   case "hitam":
//     console.log("Ini warna hitam");
//     break;

//   case "merah":
//     console.log("Ini warna merah");
//     break;

//   case "hijau":
//     console.log("Ini warna hijau");
//     break;

//   case "kuning":
//     console.log("Ini warna kuning");
//     break;

//   case "biru":
//     console.log("Ini warna biru");
//     break;

//   default:
//     console.log("Warna tidak dikenali");
//     break;
// }

//TODO: LOOPING (PERULANGAN)

//* WHILE

// let index = 0;
// //! Kurang dari (<)
// while (index < 10) {
//   console.log("Nilai " + index); //? Hasilnya perulangan Nilai 0 s/d 9
//   index++;
// }

// console.log("============================");

// let i = 0;
// //! Kurang dari sama dengan (<=)
// while (i <= 10) {
//   console.log("Nilai " + i); //? Hasilnya perulangan Nilai 0 s/d 10
//   i++;
// }

//* LOOP

// for (let index = 0; index < 10; index++) {
//   console.log("Nilai " + index);
// }

//TODO: FUNCTION (FUNGSI)

//! Function bersifat reuseble (bisa digunakan berkali-kali dengan parameter yang dinamis)

// function nama(name) {
//   //? (name) <== Disebut parameters
//   console.log("Hallo " + name);
// }

// nama("Naufal Hadi Putra");

// function pertambahan(angka1, angka2) {
//   //? angka1 <== parameter ke-1, angka2 <== parameter ke-2
//   return angka1 + angka2;
// }

// console.log(pertambahan(10, 20));

//TODO: ARRAY

// let array = [
//   "Naufal", //? index 0
//   25, //? index 1
//   "Laki - Laki", //? index 2
//   "Main Game", //? index 3
//   ["Jl. Horison Raya", "Jawa Barat", "Kota Bekasi"], //? index 4,
// ];

// //! Index pertama array (index ke-1) dimulai dari 0 (nol) bukan 1 (satu)

// console.log(array);

// console.log("Nama : " + array[0]);
// console.log("Usia : " + array[1]);
// console.log("JK : " + array[2]);
// console.log("Hobi : " + array[3]);
// console.log("Alamat : " + array[4][0]);
// console.log("Provinsi : " + array[4][1]);
// console.log("Kota/Kabupaten : " + array[4][2]);

//TODO: OBJECT

// let data = {
//   name: "Naufal",
//   age: 25,
//   gender: "Laki - Laki",
//   address: ["Jl. Horison Raya", "Jawa Barat", "Kota Bekasi"],
//   hoby: {
//     watch: "Naruto",
//     game: "RPG",
//   },
// };

// console.log("Nama : " + data.name);
// console.log("Umur : " + data.age);
// console.log("JK : " + data.gender);
// console.log(
//   "Alamat : " + data.address[0] + " " + data.address[1] + " " + data.address[2]
// );
// console.log("Hoby Main Game : " + data.hoby.game);
