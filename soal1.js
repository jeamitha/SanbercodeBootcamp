const prompt = require('prompt-sync')({sigint: true});

var bilangan = prompt("Input bilangan genap:");

    if (bilangan<0){
        console.log("Tidak bisa input bilangan negatif")
    }
    else if (bilangan%2!=0) {
        console.log("Tidak bisa input bilangan ganjil")
    } else {
    hasil = Math.sqrt(bilangan);
    console.log ("Hasil akar kuadrat"+' '+bilangan+' '+"adalah"+' '+hasil)
    }
