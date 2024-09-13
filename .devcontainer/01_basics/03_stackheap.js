//this is stack memory example

let a ="aasifaliquazi";
let b= a;
b="ashu ali";
console.log(a);
console.log(b);


//this is heap memory example

let userone={
    email :"aaa@gmail.com",
    upi :"aaa"
}
let usertwo = userone
usertwo.email ="bbbb@gmail.com";

console.log(userone.email);
console.log(usertwo.email);
