const Y = (funct) => {
  return (v) => {
    return funct(funct, v)
  }
}


const addToTen = (adder, num = 0) =>{
  if(num < 10){
    console.log(num)
    return adder(adder, num + 1)
  }
  return num
}

console.log(Y(addToTen)(0))
