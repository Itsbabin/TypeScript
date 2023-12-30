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
        let 
        return 
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
 To make a new type\
 ```typescript
   type User = {
        name:String;
        age: number; 
   }
 ```