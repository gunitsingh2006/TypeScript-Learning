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

type cardNumber={
    cardnumber:number
}

type cardDates={
    carddates:string
}

type cardDetails=cardNumber&cardDates&{        // this is use case where you define a new type based on the exsistance type
    cvv:number
}


myUser.email = "gunitsingh.com"
console.log(myUser)

