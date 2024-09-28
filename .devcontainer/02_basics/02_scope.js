// let c=50;
// if (true){
//     let a=10;
//     const b=20;
//     console.log(b);
// }
// console.log(c);

// function with global scope with nested function

// function one(){
//     const username="hitesh";

//     function two(){
//         const website="youtube";
//         console.log(username);
//     } 
//     console.log(website);
//     two();
// }
// one();

// if(true){
//     const username="hitesh";
//     if(username === "hitesh"){
//         const website=" youtube ";
//         console.log(username + website);
//     }
//     // console.log(website);
// }
// console.log(username);



// ==================interesting===========================
console.log(one(5));
function one(num){
    return num+1;

}


// console.log(store(5));
const store= function(num){
    return num+2;
}
