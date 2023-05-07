console.clear();

// const name = 'Pat';
const firstName = 'John';
const lastName = 'Pat';

// function getFullName(firstName, lastName) {
// return firstName + ' ' + lastName;
// }

function getFullName(firstName, lastName) {
	return `${firstName} ${lastName}`;
}

// const mHI = 'Hello' + name;
// const mHi = `Hello ${name}`;
const mHi = `Hello ${getFullName(firstName, lastName)}`;
console.log(mHi);


//rgba(red, green, blue, alpha)

let red = 18;
let green = 27;
let blue = 56;
let alpha = 78;

// const rgbaExp = 'rgba(' +red +', '+green +', ' +blue +', ' +alpha +')';
const rgbaExp = `rgbaExp(${red}, ${green}, ${blue}, ${alpha})`;
console.log(rgbaExp);