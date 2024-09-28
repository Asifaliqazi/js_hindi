// const user={
//     username: "hitesh",
//     num: 999,
//     welcomemessage:  function website(){
//         console.log(`${this.username}, welcome to the website`);
//         // console.log(this);
//     }
// };
// user.welcomemessage();
// console.log(user);
// user.username="sam";
// console.log(user);


// function chai(){
//     let username="hitesh";
//     console.log(this.username);
// }
// chai();


// const  chai = function(){
//     let username="hitesh";
//     console.log(this.username);
// }
// chai();

// const  chai = () => {
//     let username="hitesh";
//     console.log(this.username);
// }
// chai();

//implicit return arrow function program in javascript

// const chai =(num1, num2) =>  num1+num2;
// console.log(chai(5,5));


//implicit return program arrow funtion types

//type 1
// const chai=(num1, num2) => {return num1+num2}
// console.log(chai(10,10));

// type 2
// const chai=(num1, num2) => (num1+num2)
// console.log(chai(10,10));

//type 3
// const chai=(num1, num2) => num1+num2;
// const chai=(num1, num2) => ({username:"hitesh"});
// console.log(chai(10,10));


// =============this example is iife===========

(function chai(){
    //this is named iife
    console.log("this database is created");
})();

(() => {
    console.log("this database is created");
})();

((name) => {
    console.log(`${name}, database is created`);
})("hitesh");