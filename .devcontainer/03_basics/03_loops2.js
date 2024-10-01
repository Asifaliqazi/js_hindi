//for of loop

// const numbers=[1,2,3,4,5]
// for(const num of numbers){
//     // console.log(`value of numbers is : ${num}`);
// }
// const strings="hello world";
// for(const str of strings){
//     if (str == " "){
//         continue;
//     }
//     console.log(`value of numbers is : ${str}`);
// }


//map in js
// const map=new Map()
// map.set("In", "India");
// map.set("Usa", "America");
// map.set("Ch", "China");

// for (const [key, value] of map) {
//     console.log(key, "->" , value);
// }

const myObject={
    js: "javascript",
    c: "c language",
    rb: "ruby"
};
for (const key in myObject) {
    console.log(`${key} , shortcut of ${myObject[key]}`);
    
}