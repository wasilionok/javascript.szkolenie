'use strict';

var jsonOsoby = {
    'osoby': [
        {
            imie: 'Krystian',
            nazwisko: 'Dziopa',
            wzrost: 180,
            zainteresowania: [
                {nazwa: 'podroże'},
                {nazwa: 'gotowanie'}
            ]
        },
        {
            imie: 'Dominik',
            nazwisko: 'Gomuła',
            wzrost: 190,
            zainteresowania: [
                {nazwa: 'gotowanie'},
                {nazwa: 'sport'}
            ]
        },
        {
            imie: 'Klaudia',
            nazwisko: 'Kowalska',
            wzrost: 160,
            zainteresowania: [
                {nazwa: 'programowanie'},
                {nazwa: 'podroz'},
                {nazwa: 'motoryzacja'}
                
            ]
        }
    ]
}

console.log(jsonOsoby);
console.log(jsonOsoby.osoby[0].imie);

(jsonOsoby.osoby.forEach (function(element,index){
                                         console.log(element.imie);
                                         }));