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
//var code = [5,3,2,6];

function makeCheck(a) {
  let b = [];
  a = [...a];
  c = code.join("").split("");
  // Bull
  for (var i = 0; i < c.length; i++) {
    if (a[i] == c[i]) {
      b.push("■");
      a[i] = "x";
      c[i] = "x";
    }
  }
  a = a.filter(i => i != "x");
  c = c.filter(i => i != "x");
  // Cow
  for (var i = 0; i < a.length; i++) {
    for (var o = 0; o < c.length; o++) {
      if (a[i] != "x" && a[i] == c[o]) {
        b.push("□");
        a[i] = "x";
        c[o] = "x";
      }
    }
  }
  return b.join(" ");
}

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Make a guess ', (response) => {
  console.log(`You entered: ${response}`);
  console.log(`The answer: ${code}`);
  if (response === code.join("")) {
    console.log(`HURRAY`);
  } else {
    response = [...response];
    var bull = makeCheck(response);
    console.log(`You have ${bull}`);
  }
});
