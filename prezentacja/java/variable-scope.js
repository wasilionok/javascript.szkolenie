'use strict'

var iloscOsoba1 = 3500;
var iloscOsoba2 = 5000;
var iloscOsoba3 = 7500;
var iloscOsoba4 = 2000;

var sumaKasy;

sumaKasy = iloscOsoba1 + iloscOsoba2 + iloscOsoba3;

console.log (sumaKasy);

function policzSumaKasy (iloscOsoba1,iloscOsoba2,iloscOsoba3){
    var sumaKasy;
    sumaKasy = iloscOsoba1 + iloscOsoba2 + iloscOsoba3 +iloscOsoba4;
    console.log(sumaKasy);
    var sumaKasyLokalnie = sumaKasy;
    console.log("Kasa lokalnie wewnątrz funkcji:" + sumaKasyLokalnie);
}

policzSumaKasy(iloscOsoba1, iloscOsoba2, iloscOsoba3)
console.log("Kasa lokalnie poza funkcji:" + sumaKasyLokalnie);