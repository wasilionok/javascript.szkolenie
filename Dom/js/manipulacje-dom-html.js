'use strict';

var mainHearde = document.getElementById('main-header'); /*przypisujemy nagłowek strony do zmiennej*/

mainHearde.innerHTML ='Treść nagłowka'; /*dodajemy tresc do naglowka*/

var link = document.getElementsByClassName('link')[0];
/*przepisujemy pierwszy link do zmiennje*/

link.href = 'http://akademia108.pl'; /*nadpisuje atrybut href w linku*/

console.log(link.classList);

//link.className = 'nowa-klasa'; /*nadpisuje nazwę klasy w linku*/

link.className += ' nowa-klasa'; /*dodaje klase do linku*/

mainHearde.style.color = '#11aa22'; /*dodoajemy style w naglowku*/