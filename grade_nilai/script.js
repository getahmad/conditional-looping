
function cekGrade(cekNilai){
    switch(true){
        case cekNilai >= 90 && cekNilai <= 100:
            alert ("Grade anda A")
            break;
        case cekNilai >= 75 && cekNilai <= 89:
            alert ("Grade anda B")
            break;
        case cekNilai >= 60 && cekNilai <= 74:
            alert ("Grade anda C")
            break;
        case cekNilai >= 50 && cekNilai <= 59:
            alert ("Grade anda D")
            break;
        case cekNilai >= 0 && cekNilai <= 50:
            alert ("Anda tidak lulus, belajar lagi")
            break;
        default:
            alert ("Sepertinya anda salah input")
    }
}
cekGrade(prompt("Masukkan Angka"))



// alert("Rules, Silahkan masukkan nilai untuk lihat grade anda")
// let cekNilai = parseInt(prompt("Masukkan Nilai"));

// switch(true){
//     case cekNilai >= 90 && cekNilai <= 100:
//         alert ("Grade anda A")
//         break;
//     case cekNilai >= 75 && cekNilai <= 89:
//         alert ("Grade anda B")
//         break;
//     case cekNilai >= 60 && cekNilai <= 74:
//         alert ("Grade anda C")
//         break;
//     case cekNilai >= 50 && cekNilai <= 59:
//         alert ("Grade anda D")
//         break;
//     case cekNilai >= 0 && cekNilai <= 50:
//         alert ("Anda tidak lulus, belajar lagi")
//         break;
//     default:
//         alert ("Sepertinya anda salah input")
// }

