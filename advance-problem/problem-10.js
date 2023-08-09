// find the second largest number in array

function secondLargest(array){
    
    let largest = []
    let secondLargest = []
    for(let i=0; i<array.length; i++){
        if(array[i]>largest){
            secondLargest = largest
            largest = array[i]
        }else if(array[i] > secondLargest){
            secondLargest = array[i]
        }
    }

    return secondLargest
}

const secondArray = [1,2,10,20,30]
const outputSecond = secondLargest(secondArray)
console.log(outputSecond)

// ludo khelay 1 theke 6 randomly kivabe pabo 

function ludo(min,max){
    let randomNumber = Math.floor(Math.random() *(max-min+1)) + min
    return randomNumber
}

console.log(ludo(1,6))


// manage alphabetically 

function manage(arr){
   
    if(!Array.isArray(arr)){
        return "provide valid array"
    }

    const newArray = arr.sort()
    return newArray
}

const arr = ["safin","sumit","wasif","mahi","akram","beltu"]
const output = manage(arr)
console.log(output)
console.log(arr)


// manage number in a ascending way

function sortNumber(array){
    if(!Array.isArray(array)){
        return "Provide valid array"
    }

    const sorting = array.sort(
        function(a,b){
            return a - b
        }
    )

    return sorting
}

const numberArray = [1,3,4,5,20,9,6,7,2]
console.log(sortNumber(numberArray))

// how many vowel in the string count the number

function count(arr,string){
    
    let count = 0
    const letter = Array.from(string)

    for(let i=0; i<letter.length; i++){
        if(arr.includes(letter[i])){
            count++
        }
    }

    return count
}



const arrayVowel = ["a","e","o","i","u","A","E","O","I","U"]

console.log(count(arrayVowel,"I love bangladesh"))

// how to remove duplicate number from an array

function duplicate(arr){
    
    let newArray = []
    for(let i=0; i<arr.length; i++){
        if(newArray.includes(arr[i]) === false){
            newArray.push(arr[i])
        }
    }

    return newArray
}

const arrayOfDuplicate = [1,2,34,5,5,2,5,3,6,7,8,9,7,1]
console.log(duplicate(arrayOfDuplicate))


string1.includes(string2)