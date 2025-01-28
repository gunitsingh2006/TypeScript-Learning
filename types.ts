type User = {
    readonly _id: string          // readonly is used so that no one can manuplate the data 
    name: string
    email:string
    isActive :boolean
    creditcard ? : number
}
let myUser: User ={
    _id: "6969",
    name: "gunit",
    email:"gunit.com",
    isActive :false
}

myUser.email = "gunitsingh.com"
console.log(myUser)

