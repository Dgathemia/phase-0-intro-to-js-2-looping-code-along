// Code your solutions in this file
function writeCards(people, action) {
	let output = [];
	let i = 0;
	for (i = 0; i < people.length; i++) {
		output.push(`Thank you, ${people[i]}, for the wonderful ${action} gift!`);
	}
	return output;
}
console.log(writeCards(["Guadalupe", "Ollie", "Aki"], "Surprise"));
function countDown(number) {
	while (number >= 0) {
		console.log(number);
		number--;
	}
}