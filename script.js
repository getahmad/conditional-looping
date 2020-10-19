

function cekHari() {
    let arrayHari = ['senin','selasa', 'rabu', 'kamis', 'jumat', 'sabtu', 'minggu','senin']
    let inputHari = document.querySelector("#inputHari").value
    inputHari = arrayHari.indexOf(inputHari)
    let hasilHari = "Hari esok " + arrayHari[inputHari+1] 
    if(inputHari!=-1){
        document.querySelector("#hasilHari").innerHTML = hasilHari
    }else{
        document.querySelector("#hasilHari").innerHTML = "Salah Euy"
    }
  }
  


  function cekGrade(){
    let cekNilai = document.querySelector("#inputAngkaGrade").value
    let hasilGrade = document.querySelector("#hasilGrade")
    switch(true){
        case cekNilai >= 90 && cekNilai <= 100:
            hasilGrade.innerHTML = "Grade anda A"
            break;
        case cekNilai >= 75 && cekNilai <= 89:
             hasilGrade.innerHTML = "Grade anda B"
            break;
        case cekNilai >= 60 && cekNilai <= 74:
            hasilGrade.innerHTML = "Grade anda C"
            break;
        case cekNilai >= 50 && cekNilai <= 59:
            hasilGrade.innerHTML = "Grade anda D"
            break;
        case cekNilai >= 0 && cekNilai <= 50:
            hasilGrade.innerHTML = "Anda Tidak Lulus"
            break;
        default:
            hasilGrade.innerHTML = "Salah Atuh"
    }
}


function cekGanjil(){

    let angka = document.querySelector("#inputAngkaGanjil").value
    let hasilGanjil = document.querySelector("#hasilGanjil")

    if(!isNaN(angka) && angka >= 0){
        for (let angkaGanjil = 0; angkaGanjil <= angka; angkaGanjil ++ ){
            if (angkaGanjil % 2 === 1){
                document.write(`${angkaGanjil}, `)
                // hasilGanjil.innerText= ( `${angkaGanjil}, `)
            }
            }
    }else{
        hasilGanjil.innerText= "Salah atuh"
    }
}


function cekGenap(){
    let angka = document.querySelector("#inputAngkaGenap").value
    let hasilGenap = document.querySelector("#hasilGenap")
    
    if(!isNaN(angka) && angka >= 0){
        
        for (angkaGenap = 0; angkaGenap <= angka; angkaGenap ++ ){
            if (angkaGenap % 2 === 0){
                document.write(`${angkaGenap}, `)
                // hasilGanjil.innerText= ( `${angkaGanjil}, `)
            }
            }
    }else{
        hasilGenap.innerText= "Salah atuh"
    }
}

