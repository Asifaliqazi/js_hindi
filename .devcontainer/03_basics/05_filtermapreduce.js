// const myarray=[1,2,3,4,5,6,7,8,9,10];
// const mynum=myarray.filter((num)=>{
//     return num>2
// })
// console.log(mynum);


// const myarray=[{Title:"Book1", genre:"science", publish:1986
//     , edition:2016},{Title:"Book2", genre:"english", publish:2000
//         , edition:2005},{Title:"Book3", genre:"maths", publish:2000
//             , edition:2010},{Title:"Book4", genre:"history", publish:2008
//                 , edition:2020}]

// const mybook=myarray.filter((item)=> item.publish <= 2000)
// console.log(mybook);

// const myarray=[1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// const mynum=myarray.map( (num) => num + "5")
// console.log(mynum);


// const myarray=[1, 2, 3];
// const mytotal=myarray.reduce( function(acc, curr) {
//     console.log(`acc is ${acc} and current value is ${curr}`);
//    return acc+curr;
// },0 )
// console.log(mytotal)

const myarray=[1, 2, 3];
const mytotal=myarray.reduce((acc, curr)=> acc+curr ,0)
console.log(mytotal)