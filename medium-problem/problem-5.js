
function badArray(array){
   let newArray = []
   let count = 0
  for(let i=0; i<array.length; i++){
    if(array[i]<0){
      newArray.push(array[i])
      count = newArray.length
    }
    
  }

  return count
  
}

const badOrGoodArray = [1,2,3,5,2,4]
console.log(badArray(badOrGoodArray))


// a function has 3 parameter singaraPrice, samosaPrice, jilapiPrice,
// where 1 singaraPrice = 10, 1 samosaPrice = 5, 1 jilapiPrice = 20 now find the total cost if you want 3 singara , 2 samosa , 4 jilapi from the shop

function expense(singara,samosa,jilapi){
  const singaraPrice = 10
  const samosaPrice = 5
  const jilapiPrice = 20
  const quantitySingara = singara * singaraPrice
  const quantitySamosa = samosa * samosaPrice
  const quantityJilapi = jilapi * jilapiPrice
  const totalCost = quantitySingara + quantitySamosa + quantityJilapi
  return totalCost
}

const singara = 3
const samosa = 2
const jilapi = 4
console.log("Total Cost:",expense(singara,samosa,jilapi),"Taka")