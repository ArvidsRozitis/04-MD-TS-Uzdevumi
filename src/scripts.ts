console.log('Ready for coding');

/*
Task 1 (page 2)

Write a function that takes two numbers (a and b) as argument
Sum a and b
Return the result
*/

const sum = (a: number, b: number): number => a + b;

console.log('///Task 1');
console.log(sum(1,2));
console.log(sum(1,10));
console.log(sum(99,1));

/*
Task 2 (page 2)

Write a function that takes a value as argument
Return the type of the value
*/

const getType = (value: any): string  => typeof(value);

console.log('///Task 2');
console.log(getType(1)); // 'number'
console.log(getType(false)); //'boolean'
console.log(getType({})); //'object'
console.log(getType(null)); //'object'
console.log(getType('string')); //'string'
console.log(getType(['array'])); //'object'

/*
Task 3 (page 3)

Write a function that takes two values, say a and b, as arguments
Return true if the two values are equal and of the same type
*/

const areSameType = (a: any , b: any): boolean => (typeof(a) == typeof(b)) == ( a == b) ? true : false;

console.log('///Task 3');
console.log(areSameType(2, 3)); //false
console.log(areSameType(3, 3)); //true
console.log(areSameType(1, '1')); //false
console.log(areSameType('10', '10')); //true

/*
Task 4 (page 3)

Write a function that takes a string (a) and a number (n) as arguments
Return the nth character of 'a'
*/

const charOfNum = (str: string, n: number): string => str[n-1];

console.log('///Task 4');
console.log(charOfNum('abcd',1)); //'a'
console.log(charOfNum('zyxbwpl',5)); //'w'
console.log(charOfNum('gfedcba',3)); //'e'

/*
Task 5 (page 4)

Write a function that takes a string (a) as argument
Remove the first 3 characters of a
Return the result
*/

const removerFirst3 = (str: string): string => str.slice(3);

console.log('///Task 5');
console.log(removerFirst3('abcdefg')); //'defg'
console.log(removerFirst3('1234')); //'4'
console.log(removerFirst3('fgedcba')); //'dcba'


/*
Task 6 (page 4)

Write a function that takes a string as argument
Extract the last 3 characters from the string
Return the result
*/

const strLast3 = (str: string): string => str.slice(-3);

console.log('///Task 6');
console.log(strLast3('abcdefg')); //'efg'
console.log(strLast3('1234')); //'234'
console.log(strLast3('fgedcba')); //'cba'

/*
Task 7 (page 4)

Write a function that takes a string (a) as argument
Get the first 3 characters of a
Return the result
*/

const strFirst3 = (str: string): string => str.slice(0, 3);

console.log('///Task 7');
console.log(strFirst3('abcdefg')); //'abc'
console.log(strFirst3('1234')); //'123'
console.log(strFirst3('fgedcba')); //'fge'

/*
Task 8 (page 5)

Write a function that takes a string (a) as argument
Extract the first half a
Return the result
*/

const strFirstHalf = (str: string): string => str.slice(0, (str.length/2));


console.log('///Task 8');
console.log(strFirstHalf('abcdefgh')); //'abcd'
console.log(strFirstHalf('1234')); //'12'
console.log(strFirstHalf('gedcba')); //'ged'

/*
Task 9 (page 5)

Write a function that takes a string (a) as argument
Remove the last 3 characters of a
Return the result
*/

const strRemoveLast3 = (str: string): string => str.slice(0, -3);

console.log('///Task 9');
console.log(strRemoveLast3('abcdefg')); //'abcd'
console.log(strRemoveLast3('1234')); //'1'
console.log(strRemoveLast3('fgedcba')); //'fged'

/*
Task 10 (page 5)

Write a function that takes two numbers (a and b) as argument
Return b percent of a
*/

const num50Perc = (num: number, per: number): number => (per / num) * 100;

console.log('///Task 10');
console.log(num50Perc(100,50) + '%'); // 50
console.log(num50Perc(10,1) + '%'); // 10
console.log(num50Perc(500,25) + '%'); // 5

/*
Task 11 (page 6)

Write a function that takes 6 values (a,b,c,d,e,f) as arguments
Sum a and b
Then substract by c
Then multiply by d and divide by e
Finally raise to the power of f and return the result
Tip: mind the order
*/

const mathTest1 = (a: number, b: number, c: number, d: number, e: number, f: number): number => Math.pow(((((a + b) - c) * d) / e), f);

console.log('///Task 11');
console.log(mathTest1(6,5,4,3,2,1)); //10.5
console.log(mathTest1(6,2,1,4,2,3)); //2744
console.log(mathTest1(2,3,6,4,2,3)); //-8

/*
Task 12 (page 6)

Write a function that takes a number as argument
If the number is even, return true
Otherwise, return false
*/

const isEaven = (num: number): boolean => num / 2 == Math.ceil(num / 2) ? true : false;

console.log('///Task 12');
console.log(isEaven(10)); // true
console.log(isEaven(-4)); // true
console.log(isEaven(5)); // false
console.log(isEaven(-111)); // false

/*
Task 13 (page 7)

Write a function that takes two strings (a and b) as arguments
Return the number of times a occurs in b
*/

const occursInStr = (a: string, str: string): number => str.split(a).length-1 ;

console.log('///Task 13');
console.log(occursInStr('m', 'how many times does the character occur in this sentence?')); //2
console.log(occursInStr('h', 'how many times does the character occur in this sentence?')) //4
console.log(occursInStr('?', 'how many times does the character occur in this sentence?')) //1
console.log(occursInStr('z', 'how many times does the character occur in this sentence?')) //0

/*
Task 14 (page 7)

Write a function that takes a number (a) as argument
If a is a whole number (has no decimal place), return true
Otherwise, return false
*/
const isWhole = (num: number): boolean => Number.isInteger(num) ? true : false;

console.log('///Task 14');

console.log(isWhole(4)); // true
console.log(isWhole(1.123)); // false
console.log(isWhole(1048));  //true
console.log(isWhole(10.48)); //false

/*
Task 15 (page 8)

Write a function that takes two numbers (a and b) as arguments
If a is smaller than b, divide a by b
Otherwise, multiply both numbers
Return the resulting value
*/

const multiplyIfSmaler = (a: number, b: number): number => a < b ? a / b : a * b;

console.log('///Task 15');
console.log(multiplyIfSmaler(10, 100)); // 0.1
console.log(multiplyIfSmaler(90, 45)); //4050
console.log(multiplyIfSmaler(8, 20)); //0.4
console.log(multiplyIfSmaler(2, 0.5)); //1

/*
Task 16 (page 8)

Write a function that takes two strings (a and b) as arguments
If a contains b, append b to the beginning of a
If not, append it to the end
Return the concatenation
*/

const strConcatenation = (a: string, b: string): string => a.includes(b) ? b.concat(a) : a.concat(b);

console.log('///Task 16');
console.log(strConcatenation('cheese', 'cake')); // 'cheesecake'
console.log(strConcatenation('lips', 's')); // 'slips'
console.log(strConcatenation(' think, therefore I am', 'I')); // 'I think, therefore I am'

/*
Task 17 (page 9)

Write a function that takes a number (a) as argument
Round a to the 2nd digit after the comma
Return the rounded number
*/
const round2Digits = (num: number): number => Number(num.toFixed(2));

console.log('///Task 17');
console.log(round2Digits(2.12397)); // 2.12
console.log(round2Digits(3.136)); // 3.14
console.log(round2Digits(1.12397)); // 1.12
console.log(round2Digits(26.1379)); // 26.14

/*
Task 18 (page 9)

Write a function that takes a number (a) as argument
Split a into its individual digits and return them in an array
Tip: you might want to change the type of the number for the splitting
*/

const splitNum = (num: number): number[] => num.toString().split('').map(Number);

console.log('///Task 18');
console.log(splitNum(10)); // [1,0]
console.log(splitNum(931)); // [9,3,1]
console.log(splitNum(193278)); // [1,9,3,2,7,8]


/*
Task 19 (page 10)

It seems like something happened to these strings
Can you figure out how to clear up the chaos?
Write a function that joins these strings together such that they form the following words:
'Javascript', 'Countryside', and 'Downtown'
You might want to apply basic JS string methods such as replace(), split(), slice() etc.
*/


const fix19String = (str1: string ,str2: string ): string => {
    const word1Clean: string = str1.replace(/[^\w\s!?]/g,'');
    const word1: string = word1Clean.charAt(0).toLocaleUpperCase() + word1Clean.slice(1);
    const word2: string = str2.replace(/[^\w\s!?]/g,'').split('').reverse().join("");

    return word1 + word2;
};

console.log('///Task 19');
console.log(fix19String('java', 'tpi%rcs')); // 'Javascript'
console.log(fix19String('c%ountry', 'edis')); // 'Countryside'
console.log(fix19String('down', 'nw%ot')); // 'Downtown'

/*
Task 20 (page 10)

This challenge is a little bit more complex
Write a function that takes a number (a) as argument
If a is prime, return a
If not, return the next higher prime number
*/


const isPrime = (num: number): number => {

    for (let i = 2; i < num; i++) {
        if (num % i === 0) {
            return isPrime(num + 1);
        }
    }    
    return num;
}
   
console.log('///Task 20');
console.log('///Šo man atrisināja OpenAi :(');
console.log(isPrime(38)); //38
console.log(isPrime(7)); //7
console.log(isPrime(115)); //127
console.log(isPrime(2000)); //2003

/*
Task 21 (page 11)

Write a function that takes two numbers, say x and y, as arguments
Check if x is divisible by y
If yes, return x
If not, return the next higher natural number that is divisible by y
*/

const isDivisibleOrHigher = (num: number, divider: number): number => {
    if ( num % divider === 0 ) {
        return num
    } 
    while (num % divider !== 0) {
        num++        
    }
    return num;
}

console.log('///Task 21 stackoverflow + pats');
console.log(isDivisibleOrHigher(1, 23)); //23
console.log(isDivisibleOrHigher(23, 23)); //23
console.log(isDivisibleOrHigher(7, 3)); //9
console.log(isDivisibleOrHigher(-5, 7)); //0

/*
Task 22 (page 11)

Write a function that takes two strings (a and b) as arguments
Beginning at the end of 'a', insert 'b' after every 3rd character of 'a'
Return the resulting string
*/

const insEvery3FromEnd = (str: string, char: string): string => {
    const strRev: string[] = str.split('').reverse();
    let newArr: string[] = [];
    for (let i = 0; i <= strRev.length-1; i++) {
        if (( i !== 0 ) && ( i % 3 == 0)) {            
            newArr.push(char);
        }
        newArr.push(strRev[i]);
    }
    return newArr.reverse().join('');    
}

console.log('///Task 22'); 
console.log(insEvery3FromEnd('1234567','.')); //'1.234.567'
console.log(insEvery3FromEnd('abcde','$')); //'ab$cde'
console.log(insEvery3FromEnd('zxyzxyzxyzxyzxyz','w')); //'zwxyzwxyzwxyzwxyzwxyz'

/*
Task 23 (page 12)

Write a function that takes a string as argument
As it is, the string has no meaning
Increment each letter to the next letter in the alphabet
Return the correct word
*/

const nextLetterStr = (str: string) => {
    const strSplit = str.split('');
    let newArr = [];
    for( let i = 0; i < str.length; i++) {
        newArr.push(String.fromCharCode(str.charCodeAt(i) + 1))
    }
    return newArr.join('');
}

console.log('///Task 23');
console.log(nextLetterStr('bnchmf')); //'coding'
console.log(nextLetterStr('bgddrd')); //'cheese'
console.log(nextLetterStr('sdrshmf')); //'testing'

/*
Task 24 (page 12)

Write a function that takes an array (a) and a value (n) as argument
Return the nth element of 'a'

*/

console.log('///Task 24 nesaprotu');

/*
Task 25 (page 12)

Write a function that takes an array (a) as argument
Remove the first 3 elements of 'a'
Return the result
*/

const arrRemoveFirst3 = (arr: number[]): number[] => arr.splice(3, arr.length-1);

console.log('///Task 25');
console.log(arrRemoveFirst3([1,2,3,4])); //[4]
console.log(arrRemoveFirst3([5,4,3,2,1,0])); //[2,1,0]
console.log(arrRemoveFirst3([99,1,1])); //[]

/*
Task 26 (page 13)

Write a function that takes an array (a) as argument
Extract the last 3 elements of a
Return the resulting array
*/

const arrExtractLast3 = (arr: number[]): number[] => arr.splice(arr.length-3, arr.length);

console.log('///Task 26');
console.log(arrExtractLast3([1,2,3,4])); //[2,3,4]
console.log(arrExtractLast3([5,4,3,2,1,0])); //[2,1,0]
console.log(arrExtractLast3([99,1,1])); //[99,1,1]

/*
Task 27 (page 13)

Write a function that takes an array (a) as argument
Extract the first 3 elements of a
Return the resulting array
*/

const arrExtractFirst3 = (arr: number[]): number[] => arr.splice(0, 3);

console.log('///Task 27');
console.log(arrExtractFirst3([1,2,3,4])); //[1,2,3]
console.log(arrExtractFirst3([5,4,3,2,1,0])); //[5,4,3]
console.log(arrExtractFirst3([99,1,1])); //[99,1,1]

/*
Task 28 (page 13)

Write a function that takes an array (a) and a number (n) as arguments
It should return the last n elements of a
*/

const arrExtractSelectedLast = (arr: number[], num: number): number[] => arr.splice(arr.length-num, arr.length);

console.log('///Task 28');
console.log(arrExtractSelectedLast([1, 2, 3, 4, 5], 2)); //[ 4, 5 ]
console.log(arrExtractSelectedLast([1, 2, 3], 6)); //[ 1, 2, 3 ]
console.log(arrExtractSelectedLast([1, 2, 3, 4, 5, 6, 7, 8], 3)); //[ 6, 7, 8 ]

/*
Task 29 (page 14)

Write a function that takes an array (a) and a value (b) as argument
The function should clean a from all occurrences of b
Return the filtered array
*/

const removeFilteredItem = (arr: any[], filt: any): any[] => {
    return arr.filter(x => x !== filt);
}

console.log('///Task 29'); 
console.log(removeFilteredItem([1,2,3], 2)); //[1, 3]
console.log(removeFilteredItem([1,2,'2'], '2')); //[1, 2]
console.log(removeFilteredItem([false,'2',1], false)); //['2', 1]
console.log(removeFilteredItem([1,2,'2',1], 1)); //[2, '2']

/*
Task 30 (page 14)

Write a function that takes an array (a) as argument
Return the number of elements in a
*/

const arrElementCount = (arr: number[]): number => arr.length;

console.log('///Task 30');
console.log(arrElementCount([1,2,2,4])); //4
console.log(arrElementCount([9,9,9])); //3
console.log(arrElementCount([4,3,2,1,0])); //5

/*
Task 31 (page 15)

Write a function that takes an array of numbers as argument
Return the number of negative values in the array
*/

const countNegativesInArr = (arr: number[]): number => arr.filter(x => x < 0).length;

console.log('///Task 31');
console.log(countNegativesInArr([1,-2,2,-4])); //2
console.log(countNegativesInArr([0,9,1])); //0
console.log(countNegativesInArr([4,-3,2,1,0])); //1

/*
Task 32 (page 15)

Write a function that takes an array of numbers as argument
It should return an array with the numbers sorted in descending order
*/

const orderInDescend = (arr: number[]): number[] => arr.sort().reverse();

console.log('///Task 32');
console.log(orderInDescend([1,3,2])); //[3,2,1]
console.log(orderInDescend([4,2,3,1])); //[4,3,2,1]
console.log(orderInDescend([4,2,6,1])); //[6,4,2,1]

/*
Task 33 (page 15)

Write a function that takes an array of strings as argument
Sort the array elements alphabetically
Return the result
*/

const orderInAlphabeth = (arr: string[]): string[] => arr.sort();

console.log('///Task 33');
console.log(orderInAlphabeth(['b', 'c', 'd', 'a'])); //['a', 'b', 'c', 'd']
console.log(orderInAlphabeth(['z', 'c', 'd', 'a', 'y', 'a', 'w'])); //['a', 'a', 'c', 'd', 'w', 'y', 'z']

/*
Task 34 (page 16)

Write a function that takes an array of numbers as argument
It should return the average of the numbers
*/

const avarageNumInArr = (arr: number[]): number => arr.reduce((a, b) => a + b) / arr.length;

console.log('///Task 34');
console.log(avarageNumInArr([10,100,40])); //50
console.log(avarageNumInArr([10,100,1000])); //370
console.log(avarageNumInArr([-50,0,50,200])); //50

/*
Task 35 (page 16)

Write a function that takes an array of strings as argument
Return the longest string
*/

const longhestStringInArr = (arr: string[]): string => {
    let longestString = arr[0];
    for ( let i = 0; i < arr.length; i++) {
        if (arr[i].length > longestString.length) {
            longestString = arr[i]
        }
    }
    return longestString;
}

console.log('///Task 35');
console.log(longhestStringInArr(['help', 'me'])); //help
console.log(longhestStringInArr(['I', 'need', 'candy'])); //candy

/*
Task 36 (page 16)

Write a function that takes an array as argument
It should return true if all elements in the array are equal
It should return false otherwise
*/

const IsAllArrArgumentsSame = (arr: any[]): boolean => {
    for ( let i = 0; i < arr.length; i++) {
        if ( arr[0] !== arr[i] ) {
            return false;
        } 
    }
    return true;
}

console.log('///Task 36');
console.log(IsAllArrArgumentsSame([true, true, true, true])); //true
console.log(IsAllArrArgumentsSame(['test', 'test', 'test'])); //true
console.log(IsAllArrArgumentsSame([1,1,1,2])); //false
console.log(IsAllArrArgumentsSame(['10',10,10,10])); //false

/*
Task 37 (page 17)

Write a function that takes arguments an arbitrary number of arrays
It should return an array containing the values of all arrays
*/

const valuesInAllArr = (...args: any[]): any[] => args.flat();

console.log('///Task 37');
console.log(valuesInAllArr([1, 2, 3], [4, 5, 6])); //[1, 2, 3, 4, 5, 6]
console.log(valuesInAllArr(['a', 'b', 'c'], [4, 5, 6])); //['a', 'b', 'c', 4, 5, 6]
console.log(valuesInAllArr([true, true], [1, 2], ['a', 'b'])); //[true, true, 1, 2, 'a', 'b']

/*
Task 38 (page 17)

Write a function that takes an array of objects as argument
Sort the array by property b in ascending order
Return the sorted array
*/

const sortObjInAscend = (arr: any[]): any[] => arr.sort((keyA, keyB) => keyA.b > keyB.b ? 1: -1);

console.log('///Task 38');
console.log(sortObjInAscend([{a:1,b:2},{a:5,b:4}])) //[{a:1,b:2},{a:5,b:4}]
console.log(sortObjInAscend([{a:2,b:10},{a:5,b:4}])) //[{a:5,b:4},{a:2,b:10}]
console.log(sortObjInAscend([{a:1,b:7},{a:2,b:1}])) //[{a:2,b:1},{a:1,b:7}]
console.log(sortObjInAscend([{a:2,b:10},{a:5,b:4},{a:3,b:7},{a:6,b:14},{a:1,b:2}])) //[{a:1,b:2},{a:5,b:4},{a:3,b:7},{a:2,b:10},{a:6,b:14}]

/*
Task 39 (page 17)

Write a function that takes two arrays as arguments
Merge both arrays and remove duplicate values
Sort the merge result in ascending order
Return the resulting array
*/

const merge2Arr = (arr1: any[], arr2: any[]) => {
    const sortedArr: any[] = arr1.concat(arr2).sort((a, b) => a - b);
    let mergedArr: any[] = [...new Set(sortedArr)];  

    return mergedArr;
}

console.log('///Task 39');
console.log(merge2Arr([1, 2, 3], [3, 4, 5])); //[ 1, 2, 3, 4, 5 ]
console.log(merge2Arr([-10, 22, 333, 42], [-11, 5, 22, 41, 42])); //[ -11, -10, 5, 22, 41,  42, 333]

/*
Task 40 (page 18)

Write a function that takes an array (a) and a number (b) as arguments
Sum up all array elements with a value greater than b
Return the sum
*/

const sumAllGreatherThanB = (numArr: number[], b: number) => {
    const filteredArr = numArr.filter((a) => a > b);
    let greatherSum = filteredArr.reduce((num1, num2) => num1 + num2);
    return greatherSum;
}

console.log('///Task 40');
console.log(sumAllGreatherThanB([1, 2, 3, 4, 5, 6, 7], 2)); //25
console.log(sumAllGreatherThanB([-10, -11, -3, 1, -4], -3)); //1
console.log(sumAllGreatherThanB([78, 99, 100, 101, 401], 99)); //602

/*
Task 41 (page 18)

Write a function that takes two numbers (min and max) as arguments
Return an array of numbers in the range min to max
*/

const sumRangeOfMinMax = (min: number, max: number): number[] => {
    let range: number[] = [];
    while (min <= max) {
        range.push(min);
        min+=1;                
    }
    return range;
}

console.log('///Task 41');
console.log(sumRangeOfMinMax(2, 10)); //[2, 3, 4, 5, 6, 7, 8, 9, 10]
console.log(sumRangeOfMinMax(1, 3)); //[1, 2, 3]
console.log(sumRangeOfMinMax(2, 7)); //[2, 3, 4, 5, 6, 7]

/*
Task 42 (page 19)

Write a function that takes an array of strings as argument
Group those strings by their first letter
Return an object that contains properties with keys representing first letters
The values should be arrays of strings containing only the corresponding strings
For example, the array ['Alf', 'Alice', 'Ben'] should be transformed to
{ a: ['Alf', 'Alice'], b: ['Ben']}
*/



console.log('///Task 42');
