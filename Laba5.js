const prompt = require("prompt-sync")({ sigint: true });

let min = 0;
let max = 99;

while (Math.round(max - min > 0)){

  let number;

  if(max - min == 1){
    number = min;
  }
  else{
    number = Math.round((max + min) / 2);
  }
  
  let moreLess = prompt(`Your number is greater than ${number}`);

  if(moreLess == "yes" || moreLess == "y"){
    min = number + 1;
  }
  if(moreLess == "not" || moreLess == "n"){
    max = number;
  }

}

console.log(`Your number is ${min}`)
