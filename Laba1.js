function labaFunct(arr, op, ranges){
  let resultArray = [];

  ranges.forEach((range) => {
    let start = range[0];
    let end = range[1];

    let last = arr[start];

    

    for(let i = start + 1; i < end; i++){
      last = op(last,arr[i]);
    }

    resultArray.push(last);

  })
  

  return resultArray;
}

let array = [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20];
let ranges = [
  [0,3],
  [6,9],
  [17,20]
];

let op = (a,b) =>  a+b;

let result = labaFunct(array,op,ranges);
console.log(result);