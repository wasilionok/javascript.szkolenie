'use strict';
var secondLink = document.getElementsByTagName('a')[1];

function alarm(event){
    event.preventDefault();
    alert('Kliknięto w link');
}
secondLink.onclick = alarm;

var thirdLink =  document.getElementsByTagName('a')[2];

thirdLink.addEventListener('click', alarm);
thirdLink.removeEventListener('click', alarm);

function klikHeader(){
    console.log('Kliknołeś w header');
}
document.getElementsByTagName('header')[0].addEventListener('click', klikHeader);

function klikH1(e){
    console.log('Kliknołeś w h1');
}

document.getElementsByTagName('h1')[0].addEventListener('click', function(e){
    e.stopPropagation();
    console.log('Kliknołeś w h1')
});

