// Task 1
for (let i = 2; i <= 20; i+=2) {
    console.log(i)
}

// Task 2
let sum = 0;
for (let i = 1; i <= 10; i++) {
    sum += i;
}
console.log(sum);

// Task 3
let factorial = 1;
for (let i = 1; i <= 5; i++) {
    factorial *= i; 
}
console.log(factorial)

// Task 4
let string = "Hello, World!";

for (let i = 0; i < string.length; i++) {
    console.log(string[i]);
}

// Task 5
let array = [1, 2, 3, 4, 5];

for (let i = 0; i < array.length; i++) {
    console.log(array[i]);
}

// Task 6
let array1 = [1, 2, 3, 4, 5];
let sum1 = 0;

for (let i = 0; i < array1.length; i++) {
    sum1 += array1[i];
}
console.log(sum1);

// Task 7
let array2 = [1, 2, 3, 4, 5];
let max = array2[0]; 

for (let i = 1; i < array2.length; i++) {
    if (array[i] > max) {
        max = array2[i];
    }
}
console.log(max); 

// Task 8
let array3 = [1, 2, 3, 1, 2, 1];
let count = 0;

for (let i = 0; i < array3.length; i++) {
    if (array3[i] === 1) {
        count++;
    }
}
console.log(count); 

// Task 9
let squares = [];

for (let i = 1; i <= 10; i++) {
    squares.push(i * i);
}
console.log(squares); 

// Task 10
for (let i = 10; i >= 1; i--) {
    console.log(i);
}

// Task 11
let powersOfTwo = [];

for (let i = 0; i < 10; i++) {
    powersOfTwo.push(Math.pow(2, i));
}
console.log(powersOfTwo);

// Task 12
let array4 = [5, 9, 3, 7, 2, 8, 1, 6, 4];
let min = array4[0]; 

for (let i = 1; i < array4.length; i++) {
    if (array4[i] < min) {
        min = array4[i];
    }
}
console.log(min);

// Task 13
let str1 = "Hello, World!";
let reversedStr = str1.split('').reverse().join('');
console.log(reversedStr); 

// Task 14
let array5 = [10, 12, 31, 40, 15];
let element = 31;
let index = -1; 

for (let i = 0; i < array5.length; i++) {
    if (array5[i] === element) {
        index = i;
        break; 
    }
}
console.log(index); 

// Task 15
let array7 = [1, 1, 1, 1, 1];
let allEqual = true; 

for (let i = 0; i < array7.length; i++) {
    if (array7[i] !== 1) {
        allEqual = false; 
        break; 
    }
}
console.log(allEqual);

// MEDIUM TASKS
// Task 1
let word = "radar";
let isPalindrome = true; 

for (let i = 0; i < Math.floor(word.length / 2); i++) {
    if (word[i] !== word[word.length - 1 - i]) {
        isPalindrome = false; 
        break; 
    }
}
console.log(word, "является палиндромом:", isPalindrome);

// Task 2
let arrayy = [1, 2, 3, 4, 3, 2, 1];
let elementToRemove = 3;
let newArray = [];

for (let i = 0; i < arrayy.length; i++) {
    if (arrayy[i] !== elementToRemove) {
        newArray.push(arrayy[i]);
    }
}
console.log(newArray); 

// Task 3
let summ = 0;

for (let i = 1; i <= 100; i++) {
    if (i % 3 === 0 || i % 5 === 0) {
        summ += i; 
    }
}
console.log(summ);

// Task 4
let arrray = [5, 9, 3, 7, 2, 8, 1, 6, 4];
let suum = 0;
for (let i = 0; i < arrray.length; i++) {
    sum += arrray[i];
}

let average = suum / count;
console.log(average);

// Task 5
let number = 123456789;
let numString = number.toString();
let count1 = 0;

for (let i = 0; i < numString.length; i++) {
    count1++;
}
console.log(count1)