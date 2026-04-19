//forEach doesn't return any value it will always undefined sometimes we need to return the values so we use filter to take return values


const mynums = [1,2,3,4,5,6,7,8,9,10]

// const a = mynums.filter( (num) => (num>4))  //this also called implicit return, here no need to write return just use paranthese it will give output as per the condition.
const a = mynums.filter( (num) => { // when we using curly braces or scope then you have to add return keyword otherwise it will not return anything just an empty array.
    return num > 4  
})
// console.log(a)

const newNums = []
 mynums.forEach( (item) => {
      if(item>4){
        newNums.push(item)
      }
})
// console.log(newNums);

const nums = mynums  //this is also called chaining method 
             .map((item) => item*10)
             .map((item) => item+2)
             .filter((item) => item>=40)

            //  console.log(nums);

const price = [1,2,3,4]
// const totalPrice = price.reduce(function(accumulator,currentValue){
//                    console.log(`Accumulator value :- ${accumulator} Current value :- ${currentValue}`);
//                    return accumulator+currentValue
// },0)

const totalPrice = price.reduce( (acc,curr) => acc+curr,0) //here we use arrow function to reduce the code line of the code 

// console.log(totalPrice);


const shoppingCart = [
                    {
                        cource:'js cource',
                        price : 1299
                    },
                    {
                        cource:'py cource',
                        price : 299
                    },
                    {
                        cource:'data science cource',
                        price : 129
                    },
                    {
                        cource:'ml cource',
                        price : 599
                    },
];

const shopping = shoppingCart.reduce((acc, item) => acc + item.price,0)
console.log(shopping);