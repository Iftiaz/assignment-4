// solving problem one ---

// function anaToVori(ana) {
//      var vori = ana / 16 ;
//      return vori;
// }

// var myAna = 32;
// var gotVori = anaToVori(myAna);
// console.log(gotVori);

// first one is done 

function pandaCost(param1, param2, param3) {
    const shingara = 7;
    const somucha = 10;
    const jilapi = 15;

    const shingaraQuentity = param1 * shingara;
    const somuchaQuentity = param2 * somucha;
    const jilapiQuentity = param3 * jilapi;

const totalPrise = shingaraQuentity + somuchaQuentity + jilapiQuentity;
return totalPrise;
}

var firstOption = pandaCost(1, 1, 3);
console.log(firstOption);


