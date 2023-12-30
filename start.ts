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
    printname():string
}

// now we can typecast a user like

let newUser : User = {
    name : "biswajit",
    age : 19,
    printname : () => {
        return ""
    },
}

type UserSecondType = {
    readonly _dbID: string | number;
    name:String;
    age: number; 
    email?: string
}

let UserBuildInSecondType : UserSecondType = {
    _dbID: 554451,
    name : "biswajit",
    age : 19
}

UserBuildInSecondType.name = "newBiswajit"

// UserBuildInSecondType._dbID = 468412;  //we cant do that becausethe item is read only

//? option chaining

let UserBuildInSecondType2 : UserSecondType = {
    _dbID: 554451,
    name : "biswajit",
    age : 19,
}

// more than one type 

type DebitCard = {
    Card_number : number;
}
type CreditCard = {
    Card_date : String;
}

type ATM_card = DebitCard & CreditCard;

//array

let list : string[] = ["abhs" , "hvdhv"]
let list2 : Array<string> = ["abhs" , "hvdhv"]
let list3 : number[][] = [
    [1,2,3,4],
    [1,2,3,4],
    [1,2,3,4],
]
//unoin of array
let list4 : (string|number)[] = [1,6,5,3]
    list4 = ["bs","dbhd","dh"]

//tuples

let tuple : [number , boolean , string] = [1 , true ,"hsjh"]

//enums

enum SeatNO {
    side,
    middle,
    window,
}

let userSeat = SeatNO.window;

//interface
interface InterfaceUser {
    name: string;
    age : number;
    concateNameAge(_name : string , _age : number):string;
}

interface InterfaceUser {
    email : string;
}

let UserWithINterface : InterfaceUser = {
    name : "biswajit",
    age : 19,
    email : "jhjbsje",
    concateNameAge : (name , age)=>{
            return "";
    }
}

interface Admin extends InterfaceUser {
    username : string
}






export{};