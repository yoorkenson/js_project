"use strict";

let str = "some";
let strObj = new String(str);

// console.log(typeof(str));
// console.log(typeof(strObj));

console.dir([1,2,3]);

const soldier = {
    health: 300,
    armor: 100,
    sayHello: function() {
        console.log("Hello");
    }
};

const john = Object.create( )

// const john = {
//     health: 100
// };

john.__proto__ = soldier; // устаревший формат прототипирования
console.log(john); //john.armor = 100
john.sayHello(); //Hello

//новый формат прототипирования

Object.setPrototypeOf(john, soldier);