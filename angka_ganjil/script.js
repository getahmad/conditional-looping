let angka = prompt ("masukkan angka: ")
function cekGanjil(angkaGanjil){
    for (angkaGanjil = 0; angkaGanjil <= angka; angkaGanjil ++ ){
        if (angkaGanjil % 2 === 1){
            document.write(`${angkaGanjil}, `)
        }else{
        }
    }
}

cekGanjil()

/*
alert ("Rules, silahkan masukkan angka untuk menampilkan angka ganjil")
let angka = prompt ("masukkan angka: ")
for (let angkaGanjil = 0; angkaGanjil <= angka; angkaGanjil ++ ){
    if (angkaGanjil % 2 === 1){
        document.write(`${angkaGanjil}, `)
    }else{
    }
} */