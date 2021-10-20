const fridge = ['tomato', 'banana', 'apple', 'onion', 'cucumber']
        // const ingredients = ["orange", 'tomato', 'onion','apple']  //return false
        const ingredients = ['tomato', 'onion','apple']  //return true

        function validateRecipe(fridge, ingredients) {

            ////////////frist way///////////////
            return ingredients.every(v=> fridge.includes(v));

/////////////second way/////////////
//             let arr1= fridge.map(v=> v.toLowerCase());
//             let arr2= ingredients.map(v=> v.toLowerCase());
//             let str1=arr1.toString();
//             let str2=arr2.toString();
// return (str1 === str2) ? true : false;
            ////first way to solve the problem////////////
        // return ingredients.filter(e => fridge.includes(e)).length === fridge.length



    ///////////// //second way to solve the problem 
            // return fridge.filter(e => ingredients.indexOf(e) !== -1).length === ingredients.length;
    
            // return ingredients.filter(e=> fridge.includes(e))
           //third way to solve the problem 
           // return fridge.some(v => ingredients.includes(v)).length === ingredients.length
    
    //         ////way using loop to solve the problem
    //         for (let i = 0; i < ingredients.length; i++) {
    //         //     console.log("i,",i);
    //             for (let j = 0; j < fridge.length; j++) {
    //         //        console.log('j',j);
    //                 if (fridge[j] === ingredients[i]) {return true;}
    //             }
    //     }
    //     return false;
    }
        
    console.log(validateRecipe(fridge, ingredients));

    