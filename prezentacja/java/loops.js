'use strict'

/*pętla for*/
for (var i =10; i>0; i--){
    console.log(i);
}

/*pętla forEach*/
var imiona =['Wojtek', 'Krystian', 'Danuta'];



imiona.forEach( function (element, index ) {
    console.log( "Element z Indexem: " + index + " ma wartość " + element );
});

/*pętla While*/
var it =0;
while(it<10){
    console.log("It:" + it);
    it++;
}


/*pętla do ...while*/
var j = 0;
do {
    console.log('Pętla do ... while:' +j)
    j++;
}while (j < 10)
    
   /* przerwaenie berak*/
    
var a = 0;
while(a<10){
    console.log('break:' +a);
    a++;
    if(a ==5){
        break;
    }
}
    
/*przerwanie- continue*/
for(var i = 0; i<10; i++){
    if(i==5);{
    continue;
}

console.log('Continue:' + 1);
}


for(var i=0; i < 3; i++){
    for(var j = 0; j < 2; j++){
        if(j ==2){
            break;
        }
        console.log('i=',+i+' ,j' +j)
}
}