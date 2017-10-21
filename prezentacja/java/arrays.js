'use strict';

var imiona = ['Wojtek', 'Krystian', 'Łukasz'];

console.log(imiona);

imiona[3] = 'Piotrek';

console.log(imiona);

var ileElementow = imiona.push('Geralt');

console.log(imiona);

console.log(ileElementow);

var ostatniElement = imiona.pop();

console.log (imiona);

console.log(ostatniElement);
console.log('Ile elementow w tablicy:' +imiona.length);
console.log(imiona.join);

imiona.reverse();
console.log(imiona);
imiona.sort();
console.log(imiona);
