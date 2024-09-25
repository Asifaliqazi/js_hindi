const mysymbol=Symbol("mykey");
const newcar={
    company:"maruti",
    color:"red",
    [mysymbol]:"mykey",
    "type":"sports",
    engine:"4000cc"
}
// Object.freeze(newcar);
// newcar.company="suzuki";
// console.log(newcar);

newcar.greeting=function(){
    console.log("this is js user");
}
newcar.greetingTwo=function(){
    console.log(`this is js user', ${this.company}`);
}
console.log(newcar.greeting());
console.log(newcar.greetingTwo());
