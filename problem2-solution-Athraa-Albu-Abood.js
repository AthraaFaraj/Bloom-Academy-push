/////////////first way //////////////////////////

// var ingredients = {'tomato': 1, 'onion': 1,'orange':7};//return false
var ingredients = {'tomato': 1, 'onion': 1,'orange':5};//return false

var fridge = {'tomato': 1, 'onion': 1, 'apple': 4, 'orange':5}; 

const isEquel = (fridge, ingredients)=> {
    const objkey1 = Object.keys(fridge);
    const objkey2 = Object.keys(ingredients);
//     if (objkey1.length !== objkey2.length){
//             return false;
//     }
    for (let h of objkey2){
            if (ingredients[h] !== fridge[h]) {
                    return false;
                    
            }
    }
    return true;

};
console.log(isEquel(fridge,ingredients));


/////////////second way //////////////////////////
///////////////////other way to compare values of objects//////////////////

// var ingredients = {'tomato': 1, 'onion': 1};
// var fridge = {'tomato': 1, 'onion': 2}; //return false
// // var fridge = {'tomato': 1, 'onion': 1}; //return true
// function comparep(fridge2, ingredients2){
//         return fridge2.onion === ingredients2.onion; //return false
// }
// console.log(comparep(fridge,ingredients));


/////////// ///////////third way////////////////////////

// var ingredients = {'tomato': 1, 'onion': 1};
// // var fridge = {'tomato': 1, 'onion': 2}; //return false
// var fridge = {'tomato': 1, 'onion': 1}; //return true

// function shallowEqual(obj1,obj2){
//         const keys1=Object.keys(fridge);
//         const keys2=Object.keys(ingredients);

//         if (keys1.length !== keys2.length){
//                 return false;
//         }

//         for(let k of keys1){
//                 if(obj1[k] !== obj2[k]){
//                 return false;
//         }
// }
// return true;
// }
// console.log(shallowEqual(fridge,ingredients));



/////////////fourth way //////////////////////////

// var ingredients = {'tomato': 1, 'onion': 1};
// // var fridge = {'tomato': 1, 'onion': 2}; //return false
// var fridge = {'tomato': 1, 'onion': 1}; //return true
// function deepEqual(obj1,obj2){
//         const keys1=Object.keys(fridge);
//         const keys2=Object.keys(ingredients);

//         if (keys1.length !== keys2.length){
//                                 return false;
//                         }
//          for(let k of keys1){
//          const val1=obj1[k];
//          const val2=obj2[k];
//          const areObj = isObject(val1) && isObject(val2)
//          if(areObj && !deepEqual(val1,val2) || !areObj && val1 !== val2) {
//          return false;
//         } 
// }
// return true;      
// }
// function isObject(obj){
//         return obj != null && typeof obj === 'obj';
// }

// console.log(deepEqual(fridge,ingredients));



/////////////////////////five way //////////////////////////
// var ingredients = {'tomato': 1, 'onion': 1};
// var fridge = {'tomato': 1, 'onion': 2}; //return false
// // var fridge = {'tomato': 1, 'onion': 1}; //return true

// const result = JSON.stringify(fridge) === JSON.stringify(ingredients)
// console.log(result);