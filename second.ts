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

//generics

function myFunction<T>(arr : T):T{
    return arr;
}

let newFunction = <T>(argument : T[]):T[] =>{
    return argument ;
}

