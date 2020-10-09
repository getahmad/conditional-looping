
alert ("Rules, silahkan masukkan angka untuk menampilkan angka genap")
let angka = prompt ("masukkan angka: ")
for (let angkaGenap = 0; angkaGenap <= angka; angkaGenap ++ ){
    if (angkaGenap % 2 === 0){
        document.write(` ${angkaGenap}`)
    }else{
    }
}

