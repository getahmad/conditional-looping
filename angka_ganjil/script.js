
function cekGanjil(angka){
    for (angkaGanjil = 0; angkaGanjil <= angka; angkaGanjil ++ ){
        if (angkaGanjil % 2 === 1){
            document.write(`${angkaGanjil}, `)
        }else{
        }
    }
}

cekGanjil(prompt("masukkan angka :"))

/*
alert ("Rules, silahkan masukkan angka untuk menampilkan angka ganjil")
let angka = prompt ("masukkan angka: ")
for (let angkaGanjil = 0; angkaGanjil <= angka; angkaGanjil ++ ){
    if (angkaGanjil % 2 === 1){
        document.write(`${angkaGanjil}, `)
    }else{
    }
} */