//Buat dan jelaskanlah 10 method bawaan JavaScript (Built-in Functions) beserta contoh penggunaannya

/* 1. pop()
pop() berfungsi untuk menghapus elemen terakhir dari suatu array
Contohnya*/
const favSongs = ["Yellow", "The Truth Untold", "Style", "Congratulation"]
favSongs.pop() //hasilnya favSongs = ["Yellow", "The Truth Untold", "Style"]
console.log(favSongs)


/*2. shift()
shift() berfungsi untuk menghapus data pertama dari suatu array
Contohnya*/
const cakes = ["Blackforest", "Lapis Legit", "Red Velvet", "Cheesecake", "Muffin"]
cakes.shift() //Hasilnya cakes = ["Lapis Legit", "Red Velvet", "Cheesecake", "Muffin"]
console.log(cakes)


/*3. unshift()
unshift() digunakan untuk menambahkan data baru ke dalam indeks terdepan dari suatu array
Contohnya*/
const buah = ["Apel", "Pisang", "Mangga"]
buah.unshift("Anggur") //Menambahkan anggur sebagai indeks ke-0 dari variabel buah
console.log(buah) // Output : ["Anggur","Apel", "Pisang", "Mangga"]


/*4. reverse()
reverse() digunakan untuk mengubah urutan array dimulai dari index terakhir
Contohnya */
const tinggi = [183, 154, 160, 177, 169]
tinggi.reverse() // tinggi = [183, 154, 160, 177, 169]
console.log(tinggi)


/*5. toUpperCase()
toUpperCase mengubah suatu string menjadi huruf kapital, namun tidak mengubah bentuk awalnya
Contohnya */
const sapa = "selamat pagi"
console.log(sapa.toUpperCase()) //Output akan berupa "SELAMAT PAGI", sementara nilai sapa = "selamat pagi"


/*6. toLowerCase()
toLowerCase() digunakan untuk mengubah huruf kapital menjadi huruf kecil, namun tidak mengubah bentuk awalnya
Contohnya*/
const nama = "NATHAN"
console.log(nama.toLowerCase())//Output akan berupa "nathan", sementara nilai nama = "NATHAN"


/*7.concat()
concat() digunakan untuk menggabungkan dua atau lebih array ke dalam array baru
tanpa merubah array yang sudah ada.
Contoh penggunaannya*/
const nilai1 = [68,72,90,66]
const nilai2 = [50,90,88,96]
const nilai3 = [76,98]
const nilaibaru = nilai1.concat(nilai2, nilai3)
console.log(nilaibaru) //akan mencetak array [68,72,90,66,50,90,88,96,76,98]


/*8. parseInt()
digunakan untuk mendapatkan nilai integer dari suatu variabel
Contoh penggunaannya*/
const banyak = "25 buah"
const angka = parseInt(banyak) //angka = 25
console.log(angka)


/*9. isNaN()
isNaN() dapat digunakan untuk menentukan apakah suatu variabel bertipe data number atau bukan
Jika tipe datanya bukan number, fungsi ini akan mengembalikan nilai true.
Jika tipe datanya number, maka fungsi ini akan mengembalikan nilai false.*/
console.log(isNaN("kenapa")) // akan mencetak true
console.log(isNaN(300))// akan mencetak false


/*10. join()
join() digunakan untuk memberi pemisah diantara data dalam array.
*/
const makanan = ["Rendang", "Martabak", "Opor Ayam"]
let makan = makanan.join(" dan ") //makan = "Rendang dan Martabak dan Opor Ayam"
console.log(makan)