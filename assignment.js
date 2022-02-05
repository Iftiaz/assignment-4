// solving problem one ---

// function anaToVori(ana) {
//     if (typeof ana != 'number' ) {
//         return 'Please give number greater than 15'
//     }
//      var vori = ana / 16 ;
//      return vori;
// }

// var myAna = 'sakib';
// var gotVori = anaToVori(myAna);
// console.log(gotVori);

// first one is done 

// function pandaCost(param1, param2, param3) {

// if (typeof (param1, param2, param3) == 'string') {
//     return 'give three number greater than 0'
// }

//     const shingara = 7;
//     const somucha = 10;
//     const jilapi = 15;

//     const shingaraQuentity = param1 * shingara;
//     const somuchaQuentity = param2 * somucha;
//     const jilapiQuentity = param3 * jilapi;

// const totalPrise = shingaraQuentity + somuchaQuentity + jilapiQuentity;
// return totalPrise;
// }

// var firstOption = pandaCost(1, 1, 2);
// console.log(firstOption);

// function picnicBudget(persons) {
//     if (typeof persons == 'string') {
//         return 'Please give a number greater then 0'
//     }

//     if (persons <= 100) {
//         var ammount = 5000;
//         var total = persons * ammount;
//         return total;
//     }

//     else if (persons >= 101 && persons <=200){
        
//         var ammount = 5000;
//         var ammount2 = 4000;
//         var person100Above = persons - 100;
//         var persons100 = 100 * ammount;
//         var persons100Plus = person100Above * ammount2;
//         var total = persons100 + persons100Plus;
//     return total
//     }
//     else if (persons > 200){
        
//         var ammount = 5000;
//         var ammount2 = 4000;
//         var ammount3 = 3000;
//         var person200Above = persons - 200;
//         var persons100 = 100 * ammount;
//         var persons200 = 100 * ammount2 ;
//         var persons200Plus  = person200Above * ammount3;
//         var total = persons100 + persons200 + persons200Plus;
//     return total
//     }

// }

function oddFriend(nameList) {

    if (typeof nameList == 'number') {
        return 'please give a string array'
    }
    let oddfriend = [];

    for (let index = 0; index < nameList.length; index++) {
        const element = nameList[index];
        if (element.length % 2 !=0) {
            return (oddfriend = element);
        }
    }
}

var arrays = ['heel', 'byee', 'lol', 'kol'];
var findEquel = oddFriend(arrays);
console.log(findEquel);