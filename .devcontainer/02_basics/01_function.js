//function parameter with arguments

// function add(a, b){
//     console.log(a+b);

// }
// add(2, 5);


// funtction parameter arguments with return value;

// function add(a, b){
//      let result=a+b;
//      return result;

//     return a+b;

//     return 
//  }
// const result= add(2, 5);
// console.log(`result is ${result}`);


// function name(username){
//     return `${username} is logIn`;
// }
// console.log(name("Hitesh"));


// function name(username){
//     if(username === undefined){
//          console.log("Please Enter a username");
//         return ;
//     }
//     return `${username} is logIn`;
// }
// console.log(name())


//function with  the help of Rest operator

//function logincart(...num1){
//     return num1;
// }
// console.log(logincart(100, 200, 400));



//function with objects

// const user={
//     Name:"Rahul",
//     Price:2000
// }
// function login(anyobject){
//     console.log(`Name is ${anyobject.Name} and Price is ${anyobject.Price}`);
// }
// login(user);
// login({
//     Name:"Sam",
//     Price:1500
// })


//function with array;

const myArray=[200, 400,600];
function login(getarray){
    return getarray[2];

}
console.log(login(myArray));