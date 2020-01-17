const start = 36454675238; // next prime => 11

console.log(`Starting number: ${start}`);

let current = start;

const isPrime = num => {
  for(let i = 2; i <= num / 2; i++) {
    if(num % i === 0) {
      return false;
    }
  }

  return true;
};

while(!isPrime(current)) {
  current++;
}

console.log(`Next prime: ${current}`);