/* Opdracht 1 */
// Schrijf een functie die drie parameters verwacht en deze drie getallen bij elkaar optelt en teruggeeft.
// ---- Verwachte uitkomsten:
// 3, 4, 5 geeft 12
// 11, 3, 9 geeft 23

const addThree = (a, b, c) => a + b + c;
console.log(addThree(3, 4, 5));
console.log(addThree(11, 3, 9));

/* Opdracht 2 */
// Schrijf een functie die twee strings verwacht en deze aan elkaar geplakt teruggeeft.
// Je mag hier geen String Object methoden voor gebruiken.
// ---- Verwachte uitkomsten:
// "abra", "cadabra" geeft "abracadabra"

const concat = (str1, str2) => str1 + str2;
console.log(concat("abra", "cadabra"));

/* Opdracht 3 */
// Schrijf een functie die twee parameters verwacht: een woord en een karakter
// De functie omwikkelt het woord met het karakter en geeft dit terug
// ---- Verwachte uitkomsten:
// "bril", "*" geeft "*bril*"
// "beep", "_" geeft "_beep_"
// "kaas", "Q" geeft "QkaasQ"

const mummify = (word, char) => char + word + char;

console.log(mummify("bril", "*"));
console.log(mummify("beep", "_"));
console.log(mummify("kaas", "Q"));

/* Opdracht 4 */
// Schrijf een functie die een array van strings verwacht. De functie geeft
// alle strings aan elkaar geplakt terug. Je mag hier geen array- of string methoden
// voor gebruiken.
// ---- Verwachte uitkomsten:
// ["abra", "cadabra"] geeft "abracadabra"
// ["a", "b", "c"] geeft "abc"

const arr1 = ["abra", "cadabra"];
const arr2 = ["a", "b", "c"];

const concatArr = (words) => {
    let temp = "";
    for (let i = 0; i < words.length; i++) {
        temp += words[i];
    }
    return temp;
}

console.log(concatArr(arr1));
console.log(concatArr(arr2));

// OF:

console.log(arr1.reduce((a, b) => a + b));
console.log(arr2.reduce((a, b) => a + b));


/* Opdracht 5 */
// Schrijf een functie die een array van strings verwacht en een gezamelijke groet teruggeeft
// ---- Verwachte uitkomsten:
// ["Nick", "Nova", "Mitchel", "Arjen"] geeft "Hoi Nick, Nova, Mitchel en Arjen!"
// ["Piet", "Henk"] geeft "Hoi Piet en Henk!"
// ["A", "B", "C", "D", "E", "F"] geeft "Hoi A, B, C, D, E en F!"

const names1 = ["Nick", "Nova", "Mitchel", "Arjen"];
const names2 = ["Piet", "Henk"];
const names3 = ["A", "B", "C", "D", "E", "F"];

const greet = (names) => {
    let greeting = "Hoi ";
    for (let i = 0; i < names.length; i++) {
        greeting += names[i];
        if (names[i] !== names[names.length - 1]) { // OF: (names[i + 1] !== undefined)
            greeting += ", ";
        }
    }
    return greeting + "!";
}

console.log(greet(names1));
console.log(greet(names2));
console.log(greet(names3));


/* --------------------- */
// EXTRA OPDRACHTEN
/* ---------------------*/

/* Opdracht 1 */
// Schrijf een functie die een naam verwacht en een groet teruggeeft
// ---- Verwachte uitkomsten:
// "Nova" geeft "Hoi Nova!"
// "Nick" geeft "Hoi Nick!"

const greet2 = (name) => console.log(`Hoi ${name}!`);
greet2("Martijn");

/* Opdracht 2 */
// Schrijf een functie die twee parameters verwacht: een woord en een karakter
// De functie omwikkelt het woord met het karakter en geeft dit terug
// ---- Verwachte uitkomsten:
// "bril", "*" geeft "*bril*"
// "beep", "_" geeft "_beep_"
// "kaas", "Q" geeft "QkaasQ"




/* Opdracht 3 */
// Schrijf een functie die een array van strings verwacht. De functie geeft
// alle strings aan elkaar geplakt terug. Je mag hier geen array- of string methoden
// voor gebruiken zoals .concat()
// ---- Verwachte uitkomsten:
// ["abra", "cadabra"] geeft "abracadabra"
// ["a", "b", "c"] geeft "abc"





/* Opdracht 4 */
// Schrijf een functie genaamd lastEntry die de laatste entry van een array teruggeeft.
// Als de parameter n wordt meegegeven, worden de laatste n entries van de array teruggegeven.
// ---- Verwachte uitkomsten:
// lastEntry([3, 6, 9, 17, 4, 6, 25, 4]) geeft 4
// lastEntry([46, 65, 34, 204, 190, 89], 3) geeft [204, 190, 89]

const arr3 = [3, 6, 9, 17, 4, 6, 25, 4];
const arr4 =[46, 65, 34, 204, 190, 89];

const lastEntry = (arr, n) => {
    if (n) {
        return arr.slice(-n);
    }
    return arr[arr.length - 1];
}

console.log(lastEntry(arr3));
console.log(lastEntry(arr4, 3));


/* Opdracht 5 */
// Schrijf een functie die een array van getallen verwacht. De functie geeft het hoogste
// getal in de array terug. Je mag hier geen array-object methoden voor gebruiken zoals .max()
// ---- Verwachte uitkomsten:
// [3, 6, 9, 17, 4, 6, 25] geeft 25
// [46, 65, 34, 204, 190, 89] geeft 204

const arr5 = [3, 6, 9, 17, 4, 6, 25];
const arr6 = [46, 65, 34, 204, 190, 89];

const highestNum = (arr) => {
    let num = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > num) {
            num = arr[i];
        }
    }
    return num;
}

console.log(highestNum(arr5));
console.log(highestNum(arr6));


/* Opdracht 6 */
// Schrijf een functie die geen parameters verwacht en de getallen 1 tot 100 print.
// Voor getallen die deelbaar zijn door 3 print je "Fizz" in plaats van het getal.
// Voor getallen die deelbaar zijn door 5 print je "Buzz" in plaats van het getal.
// Voor getallen die zowel deelbaar zijn door 3 als door 5, print je "FizzBuzz".

const fizzBuzz = () => {
    for (let i = 1; i <= 100; i++) {
        if (i % 3 === 0 && i % 5 === 0) {
            console.log("FizzBuzz");
        }
        else if (i % 3 === 0) {
            console.log("Fizz");
        }
        else if (i % 5 === 0) {
            console.log("Buzz");
        }
        else {
            console.log(i);
        }
    }
}

fizzBuzz();
