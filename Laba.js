// function labaFunct(arr, op, ranges){
//   let resultArray = [];

//   let tempArr = [];

//   if(arr.length < 2){

//     if(arr.length == 0){
//       return [];
//     }

//     return arr;
//   }

//   tempArr.push(arr[0]);
//   tempArr.push(arr[0]);

//   let last = arr[0];

//   for(let i = 2; i < arr.length; i++){
//     let resOp = op(last, arr[i]);
//     tempArr.push( resOp );
//     last = resOp;
//   }

//   ranges.forEach((range) => {
//     let start = range[0];
//     let end = range
//   })

// return tempArr;
// }

const readline = require("readline");


function labaFunct(arr, op, ranges){

  let resultArray = [];

  ranges.forEach((range) => {
    let start = range[0];
    let end = range[1];

    let result = arr[start];
    
    for(let i = start + 1; i < end; i++){
      result = op(result, arr[i])
    }
    resultArray.push(result);
  })

return resultArray;
}



let array = [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20];

let ranges = [
  [0,1],
  [1,4],
  [5,8]

];

let op = (a,b) => a + b;

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("What is your name? ", 
function (answer) {
  console.log(`Oh, so your name is ${answer}`);
  console.log("Closing the interface");
  rl.close();
});
  // ranges.forEach((range) => {
  //   let iterator = range[0];
  //   let end = range[1];

  //   let result = arr[iterator];

  //   iterator++;

  //   while (iterator < end){
  //     result = op(result, arr[iterator]);
  //     iterator++;
  //   }

  //   resultArray.push(result);

  // })

  // return resultArray;

