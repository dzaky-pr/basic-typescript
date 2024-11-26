"use strict";
let stringArr = ["one", "hey", "Dzaky"];
let guitars = ["Strat", "Les Paul", 5150];
let mixedData = ["EVH", 1984, true];
stringArr[0] = "Mr Dzaky";
stringArr.push("hey");
guitars[0] = 1999;
guitars.unshift("Jim");
let test = [];
let bands = [];
bands.push("Van Halen");
// Tuple
let myTuple = ["Dzaky", 25, true];
let mixed = ["Bro", 25, false];
myTuple[1] = 42;
// Objects
let myObj;
myObj = [];
console.log(typeof myObj);
myObj = bands;
myObj = {};
const exampleObj = {
    prop1: "Dzaky",
    prop2: true,
};
exampleObj.prop1 = "Mr Dzaky";
let evh = {
    name: "Eddie",
    active: false,
    albums: [1984, 5150, "OU812"],
};
let jp = {
    // name: "Jimmy",
    active: true,
    albums: ["I", "II", "IV"],
};
const greetGuitarist = (guitarist) => {
    var _a;
    if (guitarist.name) {
        return `Hello ${(_a = guitarist.name) === null || _a === void 0 ? void 0 : _a.toUpperCase()}`;
    }
    return `Hello!`;
};
console.log(greetGuitarist(jp));
// Enums
// "Unline most TypeScript features, Enums are not a type-level addition to JavaScript
// but something added to the language and runtime."
var Grade;
(function (Grade) {
    Grade[Grade["U"] = 1] = "U";
    Grade[Grade["D"] = 2] = "D";
    Grade[Grade["C"] = 3] = "C";
    Grade[Grade["B"] = 4] = "B";
    Grade[Grade["A"] = 5] = "A";
})(Grade || (Grade = {}));
console.log(Grade.U);
