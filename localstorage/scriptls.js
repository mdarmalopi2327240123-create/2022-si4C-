let npm = document.getElementById("npm");
let nama = document.getElementById("nama");
let gambar = document.getElementById("gambar");

function simpan() {
    console.log(npm.value);
    console.log(nama.value);
    console.log(gambar.value);

    // localStorage.setItem("npm", npm.value);
    // localStorage.setItem("nama", nama.value);
    // localStorage.setItem("gambar", gambar.value);

    //cek localstorage sudah ada isi atau belum
    if (localStorage.getItem("mahasiswa") === null) {
        //simpan array kosong []
        localStorage.setItem("mahasiswa", "[]");
    }
    //panggil localstorage (konversi string => object)
    let data = JSON.parse(localStorage.getItem("mahasiswa"))
    console.log(data)

    //simpan value npm dan nama ke dalam object data
    data.push({
        npm: npm.value,
        nama: nama.value,
        gambar: gambar.value
    })
    console.log(data)

    //simpan data terbaru ke dalam localstorage
    //konversi object menjadi string
    localStorage.setItem("mahasiswa", JSON.stringify(data));

    //panggil tampil()
    tampil()
}

function tampil() {
    //panggil dulu local storage
    let hasil = JSON.parse(localStorage.getItem("mahasiswa"))

    //clear element ul id=list-mhs
    document.getElementById("list-mhs").innerHTML = ""
    //lakukan perulangan (foreach)
    hasil.forEach(element => {
        //console.log(element)
        document.getElementById("list-mhs").innerHTML += 
        `<div class="col-lg-4 col-md-6 col-sm-12">
        <img src="${element.gambar}" alt="Gambar URL" class="img-fluid">
        <h4 class="text-primary text-center">${element.npm}</h4>
        <h6 class="text-success text-center">${element.nama}</h6>
        </div>`
        //`<li>${element.npm} - ${element.nama}</li>`
    });
}

//jalankan fungsi tampil()
tampil()

//latihan
//tambah 1 input image URL di bawah input nama
// simpan ke local storage
// tampilkan