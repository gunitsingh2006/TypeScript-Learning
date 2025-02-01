interface Userr {
    readonly dbId:number
    email:string
    UserId:number
    googleId?:string
    // startTrial:()=>string
    startTrial():string
    getCoupon(couponname:string,value:number):number
}

interface Userr{                            // this is called {reopening of interface}
    githubToken:string
}

interface Admin69 extends Userr{
    role:"admin" | "ta" | "learner"
}

const gunitSingh: Userr = {
    dbId: 22,
    email: "g@.com",
    UserId: 2211,
    startTrial: () => {
        return "Trial started"
    },
    getCoupon(name: "gunit", off: 10) {
        return 10
    },
    githubToken: ""           // need to add as it shows error
}
gunitSingh.email="gs@.com"
