let score: number | string =35
score =44
score="22"

type Uuser ={
    username: string;
    id:number;
}

type Admin = {
    username: string;
    id:number;
}

let gunit: Uuser | string ={username:"gunit", id:334}

gunit = {username:"gunit singh ", id:334}


// function getDbId (id:number | string) {
//     // making some api calls
//     console.log(`DB id id : ${id}`);
// }
getDbId(3)
getDbId("3")

function getDbId(id:number | string){
   if(typeof id==="string"){                                 // as we are 100% sure that id = string thats why we use if case
    id.toLowerCase
   }
} 