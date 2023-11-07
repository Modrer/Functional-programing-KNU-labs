const Y = (funct) => {
  return (v) => {
    return funct(funct, v)
  }
}

let d = Y( (fact, n) => {
  if(n == 1 || n == 0){
    return 1;
  }

  return  n * fact(fact, n - 1)


}) 

const nonRecursiveFactorial = (n) => {
  let result = 1;

  while (n > 1){
    result = n * result;
    n = n - 1;

  }

  return result;
}
console.log(d(5))
console.log(nonRecursiveFactorial(5))