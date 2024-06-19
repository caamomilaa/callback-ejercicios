// El styles lo importamos aquí para que se encargue Vite de compilar todo
import "../scss/styles.scss";

//- Crea una función que reciba un array de números y muestre por consola cada número multiplicado por su índice en el array

const numberMultiplication = [1, 2, 3];
numberMultiplication.forEach((number, index) => {
  console.log(number * index);
});

//- Crea una función que reciba un array de números y devuelva un array con cada número dividido por su índice en el array más 2, es decir index + 2

const numbersDivision = [10, 20, 30];
numbersDivision.forEach((number, index) => {
  console.log(number / (index + 2));
});

//- Crea una función que reciba un array de palabras y devuelva un array con las mismas palabras en mayúsculas.

const wordsUpper = ["hola", "que", "tal"];
const wordsUpperResult = wordsUpper.map((letter) => {
  return letter.toUpperCase();
});
console.log(wordsUpperResult);

// DUDA: el letter es como number arriba??

//- Crea una función que reciba un array de palabras y una letra. La función devolverá un array con las palabras que comiencen por esa letra, si no hay mostrará un mensaje por consola diciendo que ninguna palabra coincide.

const wordsAndLetter = ["amiga", "ala", "casa", "a"];
const wordsWithThatLetter = wordsAndLetter.filter((words) => {
  if (words.startsWith(wordsAndLetter[wordsAndLetter.length - 1])) {
    return words;
  } else {
    console.log("Ninguna palabra coincide.");
  }
});
console.log(wordsWithThatLetter);

//- Añade a la función anterior lo necesario para que funcione independientemente de mayusculas o minúsculas.

//const wordsAndLetterZ = ["amiga", "ala", "casa", "a"];
//const wordsWithThatLetterZ = wordsAndLetterZ.filter((words) => {
//const wordsAndLetterLower = wordsAndLetterZ.toLowerCase();
//if (words.startsWith(wordsAndLetterLower[wordsAndLetterLower.length - 1])) {
// return words;
//} else {
//  console.log("Ninguna palabra coincide.");
//}
//});
//console.log(wordsWithThatLetterZ);

//- Crea una función que reciba un array de 10 números e imprima por consola la suma de todos los valores del array.

const tenNumbersAddition = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1];
const tenNumbersAdditionResult = tenNumbersAddition.reduce((acc, numbers) => {
  return acc + numbers;
});
console.log(tenNumbersAdditionResult);

//- Crea una función que reciba un array de 10 números, imprime por consola cada número, su cuadrado y su cubo en este formato: "Número: 2 - Cuadrado: 4 - Cubo: 8".

const squareAndCube = [2, 3, 4, 5, 6, 7, 8, 9, 10, 1];
const squareAndCubeResult = squareAndCube.forEach((number) => {
  console.log(
    `Número ${number} - Cuadrado ${Math.pow(number, 2)} - Cubo ${Math.pow(
      number,
      3
    )}`
  );
});

//DUDA: guardo en una const Result??

//- Crea una función que reciba una palabra e imprima por consola esa palabra pero con las vocales en mayúscula.

//const vowelsUpper = (word) => {
//const vowels = "aeiou";
//let newString = "";
//if (
//vowelsUpper.map((vowel) => {
//return vowel.toUpperCase();
//})
//) {
//} else {
//return word;
//}
//};
//vowelsUpperResult = vowelsUpper(["camomila"]);

//- Crea una función que reciba un array de 10 números. Dentro de esa función crea dos arrays llamados even (pares) y odd (impares), después multiplica cada uno de los números del array recibido por un número aleatorio entre 1 y 10, si el resultado es par, guárdalo en el array de pares, si es impar, en el array de impares, al final, imprime los 3 arrays por consola.

const evenAndOdd = (numbers) => {
  const even = numbers.filter((number) => {
    return number % 2 === 0;
  });
  console.log(even);
  //=>{console.log(even * Math.random());}
  const odd = numbers.filter((number) => {
    return number % 2 !== 0;
  });
  console.log(odd);
  const Multiplication = numbers.map((number) => {
    return number * Math.floor(Math.random() * 10 + 1);
    if (Multiplication % 2 === 0) {
    }
  });
};
const evenAndOddResult = evenAndOdd([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
//- Crea una función que reciba un array con 5 palabras, debes imprimir por consola un array que contenga la inicial y la última letra de cada palabra en mayúsculas, es decir, si nuestra función recibiera un array con ['hola', 'adios', 'gato', 'perro', 'casa'] deberá imprimir por consola ['H', 'A', 'A', 'S', 'G', 'O', 'P','O', 'C', 'A']. Si te quedas atascado puedes investigar la función flatMap() y flat()

//- Crea una función que reciba un array de 10 números y te diga si alguno es mayor de 5.

//- Crea una función que reciba un array de 5 palabras y un número y te devuelva un array con las palabras que tienen esa longitud, por ejemplo si le envias (['hola', 'adios', 'gato', 'perro', 'casa'], 4), te devolverá un array con ['hola', 'gato', 'casa'jfhdj
//- Crea una función que reciba un array de números y un número y te devuelva un array con los números que sean divisores de ese número

//- Crea una función que reciba este array y te devuelva sólo los usuarios cuya edad sea menor de 30 ARRAY EJERCICIO

//- Crea una función que reciba un array relleno con números y te diga si todos son pares o no.

//- Crea una función que reciba una palabra e imprima la misma palabra en orden inverso conservando las mayúsculas y las minúsculas. Si recibe "Mariposas" deberá imprimir "sasopiraM". No se puede usar reverse() 😊 (investiga la función reduceRight)
