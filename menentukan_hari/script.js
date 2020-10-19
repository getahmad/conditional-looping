
function hari(cekHari){
    let arrayHari = ['senin','selasa', 'rabu', 'kamis', 'jumat', 'sabtu', 'minggu','senin']
    cekHari = arrayHari.indexOf(cekHari)
    let hasilHari = "Hari esok " + arrayHari[cekHari+1] 
    
    if(cekHari!=-1){
        alert(hasilHari)
    }else{
        alert("salah input")
    }
}

hari(prompt("Masukkan hari").toLowerCase())



// optional tidak dengan function

/*
alert ("Rules, masukkan nama hari untuk lihat besok hari apa")
let cekHari = prompt("Masukkan nama hari :").toLowerCase();

if (cekHari === "senin"){
    alert("Hari ini Senin, Besok Selasa")
} else if(cekHari === "selasa"){
    alert("Hari ini Selasa, Besok Rabu")
}else if(cekHari === "rabu"){
    alert("Hari ini Rabu, Besok Kamis")
}else if(cekHari === "kamis"){
    alert("Hari ini Kamis, Besok Jumat")
}else if(cekHari === "jumat"){
    alert("Hari ini Jumat, Besok Sabtu")
}else if(cekHari === "sabtu"){
    alert("Hari ini Sabtu, Besok Minggu")
}else if(cekHari === "minggu"){
    alert("Hari ini Minggu, Besok Senin")
}else{
    alert("anda salah")
}
*/



// optional

/*
function hari(cekHari){
    if (cekHari === "senin"){
      alert("Hari ini Senin, Besok Selasa")
  } else if(cekHari === "selasa"){
      alert("Hari ini Selasa, Besok Rabu")
  }else if(cekHari === "rabu"){
      alert("Hari ini Rabu, Besok Kamis")
  }else if(cekHari === "kamis"){
      alert("Hari ini Kamis, Besok Jumat")
  }else if(cekHari === "jumat"){
      alert("Hari ini Jumat, Besok Sabtu")
  }else if(cekHari === "sabtu"){
      alert("Hari ini Sabtu, Besok Minggu")
  }else if(cekHari === "minggu"){
      alert("Hari ini Minggu, Besok Senin")
  }else{
      alert("anda salah")
  }
}

hari (prompt("masukkan hari:").toLowerCase())

*/







