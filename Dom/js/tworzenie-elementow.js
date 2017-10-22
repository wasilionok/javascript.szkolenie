'use strict';
var istniejacyWezel = document.getElementById('parSecond');
console.log(istniejacyWezel);

var newElement = document.createElement('p'); /*stworz nowy element*/


var newElementContent = document.createTextNode('To jest nowy paragraf'); /*stworz tekst dla nowego elementu*/

newElement.appendChild(newElementContent);

console.log(newElement);
istniejacyWezel.appendChild(newElement);
istniejacyWezel.removeChild(newElement);

/*var parFirstDiv = document.getElementById('parFirst');
var linkWParagrafie = document.getElementById('parFirst').children[2]
console.log(linkWParagrafie);
parFirstDiv.replaceChild(newElement, linkWParagrafie);*/


//Dodoaj zniacznik <br> po kazdym linku i usnun z nich atrybuty klasy 


var allLinks = document.getElementsByTagName('a');
console.log(allLinks);

for (var i = 0; i < allLinks.length; i++){
    var br = document.createElement('br');
    allLinks[i].parentNode.insertBefore(br, allLinks[i].nextSibling);
    allLinks[i].removeAttribute('class'); /*usun atrybut klasy*/
    allLinks[i].setAttribute('id','link-id-'+i);
}

