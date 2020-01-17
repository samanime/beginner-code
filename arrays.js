const scores = [];

let input;

do {
  input = parseInt(prompt('Enter score or -1 to exit.'));

  if (input > 0) {
    scores.push(input);
  }
} while(input > 0);

// let sum = 0;
// for (let i = 0; i < scores.length; i++) {
//   // sum = sum + scores[i];
//   sum += scores[i];
// }

// const sum = scores.reduce((sum, value) => {
//   return sum + value;
// }, 0);

const average = scores.reduce((sum, value) => sum + value, 0) / scores.length;

console.log(`Average score: ${average}`);