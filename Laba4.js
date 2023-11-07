function multiplier1(...args){

  if(args.length > 5){
    throw console.error("too many parameters");
  }

  let mult = 1;

  for (let arg of args) {
    mult *= arg;
  }
  return mult;

}

function multiplier2(a = 1, b = 1, c = 1, d = 1, e = 1){

  
  return a*b*c*d*e;

}


console.log(multiplier1(1,2,3,4,5))
console.log(multiplier2(5,6))
console.log(multiplier2(4,6,2))
console.log(multiplier2(5,6,2,3,4))