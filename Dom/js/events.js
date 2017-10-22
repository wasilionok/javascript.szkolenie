'use strict';
var secondLink = document.getElementsByTagName('a')[1];

function alarm(event){
    event.preventDefault();
    alert('Kliknięto w link');
}
secondLink.onclick = alarm;