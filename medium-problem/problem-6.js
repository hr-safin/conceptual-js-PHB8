/*
Problem 5: Convert your gems into diamond
তোমাকে একটা function দেওয়া হবে called gemsToDiamond(). এটা ইনপুট হিসেবে তিনটা number ( তোমাদের ৩ বন্ধুর gems এর সংখ্যা ) নিবে। 
১ম বন্ধুর প্রতি gems এর ক্ষমতা = 21
২য় বন্ধুর প্রতি gems এর ক্ষমতা = 32
৩য় বন্ধুর প্রতি gems এর ক্ষমতা = 43
[ gems এর ক্ষমতা বলতে একটা gems কে কয়টা diamond এ convert করা যাবে সেটা বুঝানো হচ্ছে। ]
এখন তোমার task: সব বন্ধুর gems মিলিয়ে total কতটি diamond পাবে সেটা বের করতে হবে। total diamond এর সংখ্যা যদি 1000 এর দিগুন এর উপর হয়ে যায় সেক্ষেত্রে total diamond থেকে 2000 বাদ দিয়ে যতগুলো diamond অবশিষ্ট থাকবে, ততগুলো তোমরা পাবে।
Sample Input & Output:-
Input: 1, 1, 1
Output: 96
Input: 20, 200, 50
Output: 6970
Input: 100, 5, 1
Output: 303

*/

function gemsToDiamond(first,second,third){
    if(typeof first !== "number" || typeof second !== "number" || typeof third !== "number" ){
        return "provide valid data type"
    }else if(first <0 || second <0 || third < 0){
        return "Number should be positive"
    }else if( first%1 !==0 || second%1 !==0  || second%1 !==0 ){
        return "Number should be integer"
    }

    else{
        const firstGems = 21
        const secondGems = 32
        const thirdGems = 43

        const firstGemsPower = first * firstGems
        const secondGemsPower = second * secondGems
        const thirdGemsPower = third * thirdGems
        const total = firstGemsPower + secondGemsPower + thirdGemsPower
        if(total >=2000){
            const cutOff = total -2000
            return cutOff
        }else{
          return total
        }

    }
}

const first = 20
const second =200
const third = 50

console.log(gemsToDiamond(first,second,third))