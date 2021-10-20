const fridge = ["tomato","onion","corret","banana","apple"]
        const item = "apple"  //true
        // const item = "orange"; //return -1
        function whereIsMyFood(fridge, item) {
            // var arr=[];
            for (let i = 0; i <= fridge.length; i++) {
                    
                    if (item === fridge[i]) {return i}
                    else  {x = -1};
                }
              return x;
        }
        
console.log(whereIsMyFood(fridge,item));


