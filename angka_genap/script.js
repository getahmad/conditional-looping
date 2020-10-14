let angka = prompt ("masukkan angka: ")
function cekGenap(angkaGenap){
    for (angkaGenap = 0; angkaGenap <= angka; angkaGenap ++ ){
        if (angkaGenap % 2 === 0){
            document.write(`${angkaGenap}, `)
        }else{
        }
    }
}

cekGenap()

// alert ("Rules, silahkan masukkan angka untuk menampilkan angka genap")
// let angka = prompt ("masukkan angka: ")
// for (let angkaGenap = 0; angkaGenap <= angka; angkaGenap ++ ){
//     if (angkaGenap % 2 === 0){
//         document.write(`${angkaGenap}, `)
//     }else{
//     }
// }


