var visorA = document.getElementById('visorA');
var visorB = document.getElementById('visorB');
var visorC = document.getElementById('visorC');
var result = document.getElementById('visorResult');

function resultado(){

    var cont1 = eval(visorA.value * visorA.value);
    var cont2 = eval(cont1 - 4 * visorA.value * (visorC.value));
   

   result.value = cont2;
    
    
}