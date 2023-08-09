// function name printDetails(). you will be provided an object. you have to use the properties of the object and make a meaning full sentence. if there are any property missing you have to print there (nai);

/*
const obj = {
    name: "mehedy",
    age:26,
    email:"abc@gmail.com"
}
Amar nam mehedy, amar boyos 26, amar email abc@gmail.com, amar bou nai. 
*/

const object  = {
    name : "mehedy",
    age : 26,
    email : "abc@gmail.com"
}

function printDetails(obj){
    if(typeof obj !=="object"){
        return "Provide valid object"
    }
    else{
        const name = object.name || "nai"
        const age =  object.age || "nai"
        const email = object.email || "nai"
        const bou = object.bou || "nai"
        return "amar nam " + name + " amar boyosh " + age + " amar email address " + email + " amr bou " + bou
    }
}

console.log(printDetails(object))