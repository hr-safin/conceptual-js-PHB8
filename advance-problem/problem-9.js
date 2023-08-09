// you will be provided an array of numbers. you have to return array of prime numbers from that input array. 


/* function name sumOfN(). you will be provided a number n. you have to calculate the total of all numbers between 1 to n . use function recursion
*/

// 3 => 3 + 2 + 1

// 3 + sumOfN(2)
// 3 + 2 + sumOfN(1)
// 3 + 2 + 1

function sumOfN(n){
     if(n ===1){
        return 1
    }else{
        let sum = n + sumOfN(n-1)
        return sum
    }
}

const n = 3;
console.log(sumOfN(n))


// function doSomething(n){
//     if(n === 0){
//         console.log("Task Completed")
//         return
//     }

//     console.log("I am doing my job")
//     doSomething(n-1)
// }
// doSomething(3)