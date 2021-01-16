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

function greet(names) {
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
