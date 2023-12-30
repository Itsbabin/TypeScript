// datatype vaiable_name : type = data ;

let Newnumber:number = 5 ;

// function functionName (variable : type): return_type {
//     // code 
// }

function MYfunction (parameter : number ) : number {
    let num : number = 5;
    return num;
}

// const functionName =  (variable : type):return_type => {
//     // code 
// }

let  Arrowfunction = (parameter : number ) : number => {
    return parameter;
}

// if we want more than one type

let variable : number | string ;

//object

let User1 : {
    name:string;
    age:number;   // types of every property
} ;

User1 = {
    name : "Biswajit",
    age : 19
}

//type elias

type User = {
    name:String;
    age: number; 
}

// now we can typecast a user like

let newUser : User = {
    name : "biswajit",
    age : 19
}


export{};