'use strict';

function obliczZysk(wplata, iloscLat, okresKapitalizacji, oprocentowanie, podatek){
    if (podatek){
        var oprocentowanieOpodatkowanie = oprocentowanie - (oprocentowanie * 0.19);
        console.log(oprocentowanieOpodatkowanie);
    }else{
        var oprocentowanieOpodatkowanie = oprocentowanie;
    }
    
    var kapital = wplata * Math.pow(1+(oprocentowanieOpodatkowanie/okresKapitalizacji), iloscLat * okresKapitalizacji);
    
    return parseFloat(kapital).toFixed(2);
}
function oblicz(){
    var wplata = parseInt(document.getElementById('wplata').value);
    
    var iloscLat = parseInt(document.getElementById('ilosc-lat').value);
    
    var okresKapitalizacji = parseInt(document.getElementById('okres-kapitalizacji').value);
    
    var oprocentowanie = parseInt(document.getElementById('oprocentowanie').value)/100;
    
    var podatek = document.getElementById('podatek').checked;
    
    var wynik = obliczZysk(wplata, iloscLat, okresKapitalizacji, oprocentowanie, podatek);
    document.getElementById('wynik').innerHTML = wynik;
}