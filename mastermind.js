const LIBRARY = [
	1,1,1,1,
	2,2,2,2,
	3,3,3,3,
	4,4,4,4,
	5,5,5,5,
	6,6,6,6
]
const readline = require('readline');

const turnLimit = 10;
// var winCondition = 20;
//Fisher-Yates shuffle
function shuffle(a){
	a = a.slice(); //creating a copy of the original array
	let i = a.length;
	while (i > 0) {
		let index = Math.floor(Math.random() * i);
		--i;
		let temp = a[i];
		a[i] = a[index];
		a[index] = temp;
	}
	return a;
}
function makeCode(a) {
  var code = shuffle(a).slice(0, 4);
  console.log(code);
  return code;
}

var code = makeCode(LIBRARY);

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Make a guess ', (response) => {
  code = code.join("");
  console.log(`You entered: ${response}`);
  console.log(`The answer: ${code}`);
  if (response === code) {
    console.log(`HURRAY`);
  } else {
    console.log(`Awww...`);
  }
  rl.close();
});
