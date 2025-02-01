// const user: (string|number)[]=[1, "hc"]
let user: [string,number, boolean]

// user =[true, 123 , "gg"]                     // this shoul be in form for declared array dataType
user =["gg", 123 , true]

let rgb : [number,number,number]
rgb=[225,224,223]

type TUser = [number,string,  ]
const newTUser: TUser=[112, "abc@gmail.com"]

newTUser[1] = "hc.com"
// numbers.unshift(1) adds the element 1 to the beginning of the numbers array
// numbers.shift() removes the first element from the numbers array
// newTUser.push(true)     //adds the (true) element in array 
// Argument of type 'boolean' is not assignable to parameter of type 'string | number'.
export{}