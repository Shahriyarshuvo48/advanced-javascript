// const num = [2, 3, 5, 10];
// const output = [];
// for(let i = 0; i < num.length; i++){
//     const element = num[i];
//     const square = element * element;
//     output.push(square);
// }
// console.log(output);
// const number = [2, 5, 8, 6, 7];
// number.map(function(element,index){
//     console.log(element,index);
// })
const number = [2, 3, 5, 10];
const result = number.map(x => x*x);
console.log(result);