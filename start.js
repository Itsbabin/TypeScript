"use strict";
// datatype vaiable_name : type = data ;
Object.defineProperty(exports, "__esModule", { value: true });
var Newnumber = 5;
// function functionName (variable : type): return_type {
//     // code 
// }
function MYfunction(parameter) {
    var num = 5;
    return num;
}
// const functionName =  (variable : type):return_type => {
//     // code 
// }
var Arrowfunction = function (parameter) {
    return parameter;
};
// if we want more than one type
var variable;
//object
var User1;
User1 = {
    name: "Biswajit",
    age: 19
};
// now we can typecast a user like
var newUser = {
    name: "biswajit",
    age: 19,
    printname: function () {
        return "";
    },
};
var UserBuildInSecondType = {
    _dbID: 554451,
    name: "biswajit",
    age: 19
};
UserBuildInSecondType.name = "newBiswajit";
// UserBuildInSecondType._dbID = 468412;  //we cant do that becausethe item is read only
//? option chaining
var UserBuildInSecondType2 = {
    _dbID: 554451,
    name: "biswajit",
    age: 19,
};
//array
var list = ["abhs", "hvdhv"];
var list2 = ["abhs", "hvdhv"];
var list3 = [
    [1, 2, 3, 4],
    [1, 2, 3, 4],
    [1, 2, 3, 4],
];
//unoin of array
var list4 = [1, 6, 5, 3];
list4 = ["bs", "dbhd", "dh"];
//tuples
var tuple = [1, true, "hsjh"];
//enums
var SeatNO;
(function (SeatNO) {
    SeatNO[SeatNO["side"] = 0] = "side";
    SeatNO[SeatNO["middle"] = 1] = "middle";
    SeatNO[SeatNO["window"] = 2] = "window";
})(SeatNO || (SeatNO = {}));
var userSeat = SeatNO.window;
var UserWithINterface = {
    name: "biswajit",
    age: 19,
    email: "jhjbsje",
    concateNameAge: function (name, age) {
        return "";
    }
};
