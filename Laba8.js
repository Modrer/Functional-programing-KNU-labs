
const gcd = (m, n) => {
  if(n == 0){
    return m;
  }

  console.log(`gcd ${m}, ${n}`)

  return gcd(n, m % n)

}

// gcd обчислення найбільшого спільного дільника двох натуральних чисел може бути представлена рівняннями 
// gcd m 0 = m     
// gcd m n = gcd n (m 'mod' n). 

console.log(gcd(10, 9))