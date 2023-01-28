// task1

let password = 'test';
let passwordCheck = prompt('enter password');
if (passwordCheck === password) {
    alert('password correct')
} else {
    alert('password incorrect')
}

// task2

let c = 18;
if (c > 0 && c < 10) {
   console.log('True'); 
} else {
   console.log('False'); 
}
c = 0;
if (c > 0 && c < 10) {
   console.log('True'); 
} else {
   console.log('False'); 
}
c = 10;
if (c > 0 && c < 10) {
   console.log('True'); 
} else {
   console.log('False'); 
}
c = -3;
if (c > 0 && c < 10) {
   console.log('True'); 
} else {
   console.log('False'); 
}
c = 2;
if (c > 0 && c < 10) {
   console.log('True'); 
} else {
   console.log('False'); 
}

// Task3

let d = 5;
let e = 150;
if (d > 100 || e > 100) {
    console.log('True');
} else {
    console.log('False');
}

// Task4

let a = 2;
let b = Number('3');
console.log(a + b);

// Task5

let monthNumber = 12;
let monthNumberCheck = Number(prompt('What is the month number?'));
switch (monthNumber = monthNumberCheck) {
    case 12:
    case 1:
    case 2:
        console.log('Winter');
        break;
    case 3:
    case 4:
    case 5:
        console.log('Spring');
        break;
    case 6:
    case 7:
    case 8:
        console.log('Summer');
        break;
    case 9:
    case 10:
    case 11:
        console.log('Autumn');
        break;
    default:
        console.log('Error');
        break;
}

// Task6
