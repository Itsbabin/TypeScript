# Type Script
to install type script in PC type this command 
```bash
npm install -g typescript
```
to transpile ts to js 
```bash
tsc filename.ts
```
to transpile ts to js in watch mode 
```bash
tsc -w filename.ts
```
## Variables
datatype vaiable_name : type = data ;
```typescript 
let decimal: number = 6;
let hex: number = 0xf00d;
let binary: number = 0b1010;
let octal: number = 0o744;
let big: bigint = 100n;
```
## Function
in ts function syntax is like\

* Normal function
 <pre>
    function functionName (variable : type): return_type {
         // code 
    }
 </pre>
 ```typescript
    function MYfunction (parameter : number ) : number {
        return parameter
    }
 ```
* Arrow function
 <pre>
    const functionName =  (variable : type):return_type => {
         // code 
    }
 </pre>
 ```typescript
    let  MYfunction = (parameter : number ) : number => {
        let num : number = 5;
        return num;
    }
 ```
## Union
* If we want to return or type cast a veriable more than one type we should use ' | ' between them

Ex - if a variable wants to store number or string then it will be written as  
```typescript
let variable : number | string ;
```
## Objects
syntax of writiing a object
```typescript
    let User1 : {
    name:string;
    age:number;   // types of every property
} ;

User1 = {
    name : "Biswajit",
    age : 19
}

```
## Type Alias
 To make a new type
 * it can define methods
 ```typescript
   type User = {
        name:String;
        age: number; 
        printname():string
   }
 ```
 now we can typecast a variable like 
 ```typescript
 let newUser : User = {
    name : "biswajit",
    age : 19,
    printname : () => {
        return ""
    },
}
 ```
 ## ReadOnly
 "readonly" keyword make a property | variable read only that means it can't be modified 
 ```typescript
 type UserSecondType = {
    readonly _dbID: string | number;
    name:String;
    age: number; 
}

 let UserBuildInSecondType : UserSecondType = {
    _dbID: 554451,
    name : "biswajit",
    age : 19
}

UserBuildInSecondType.name = "newBiswajit" // we van modify this   BUT
UserBuildInSecondType._dbID = 468412;  //we cant do that becausethe item is read only  it will throw an error
 ```
 ## Optional " ? "
 if a property or field is optional then we should follow this syntax.
 we should put a "?" after property
 ```typescript
 type UserSecondType = {
    readonly _dbID: string | number;
    name:String;
    age: number; 
    email?: string //otionaly
}

 let UserBuildInSecondType : UserSecondType = {
    _dbID: 554451,
    name : "biswajit",
    age : 19
}
 ```
 here we can provide email if nedeed

## "&" (addition of two or more types)
we can make a new type bye concatinate two or more types
```typescript
type DebitCard = {
    Card_number : number;
}
type CreditCard = {
    Card_date : String;
}

type ATM_card = DebitCard & CreditCard;
```
## Array
we typecast a array by this syntax
<pre>
datatype variable : type[] = data
OR
datatype variable : Array<> = data
</pre>
Example : 
```typescript
let list : string[] = ["abhs" , "hvdhv"]
        //or
let list2 : Array<string> = ["abhs" , "hvdhv"]
    // array of array
let list3 : number[][] = [
    [1,2,3,4],
    [1,2,3,4],
    [1,2,3,4],
]
  // union 
let list4 : string[] | number[] = [1,6,5,3]
  // or 
let list5 : (string | number)[] = [1,6,5,3]
    list4 = ["bs","dbhd","dh"]
      //
```
## Tuples
tuples help to control data type order in array
```typescript
let tuple : [number , boolean , string] = [1 , true ,"hsjh"]
```
## Enum
its like a class with defult valued property 
by defult the values start like 
* 0
* 1
* 2
...\
we can assing values in enums field\
if we assing a string or boolean value then every field need to assing <br>
if its value in number then coresponding values are incrise by 1


```typescript
enum SeatNO {
    side, //its value = 0
    middle,//its value = 1
    windowseat,//its value = 2
}
enum pilot {
    first = "main pailot", //its value = "main pailot"
    second = "copilot",//its value = "copiilot"
}

let userSeat = SeatNO.side;
```
## Interface
 insort interface is class version of type 
 * it can reconstuct 
 * it can define method
```typescript
interface InterfaceUser {
    name: string;
    age : number;
    concateNameAge(_name : string , _age : number):string;  // method
}

interface InterfaceUser {
    email : string;   // recontruct
}

let UserWithINterface : InterfaceUser = {
    name : "biswajit",
    age : 19,
    email : "jhjbsje",
    concateNameAge : (name , age)=>{
            return "";
    }
}

```
### Inherit an interface
inherit an interface means the child interface directly get the properties 
* interface only inherit by interface
```typescript
interface Admin extends InterfaceUser {
    username : string
}
```
### Impliment an interface
 Impliment an inter face means the child class must have to creat properties of parent
 child atleat have parent's all properties
 ```typescript
interface Animal {
    canSee : boolean
}

class Dog implements Animal{
    canSee: boolean;
    legs:number;
    constructor(leg:number , see : boolean){
        this.legs = leg;
        this.canSee = see;
    } 
}   
 ```
## Generics
if a function can take arguments of any type and want to return a value of taken arument's type then the generics came .\
after taking a value it locks its type.

as following this function can take any type of argumen but if we give it number then it return us number as well as in case of string , boolean etc.
```typescript
function myFunction<T>(arr : T):T{
    return arr;
}
    // for arrow function
let newFunction = <T>(argument : T):T =>{
    return argument;
}
```
#### array in generic 
if a function take and return array
```typescript
let newFunction = <T>(argument : T[]):T[] =>{
    return argument ;
}
```
