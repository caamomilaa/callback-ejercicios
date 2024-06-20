// El styles lo importamos aquí para que se encargue Vite de compilar todo
import "../scss/styles.scss";

//- Crea una función que reciba un array de números y muestre por consola cada número multiplicado por su índice en el array

const numberMultiplication = (numbers) => {
  numbers.forEach((number, index) => {
    console.log(number * index);
  });
};

numberMultiplication([1, 2, 3]);

//- Crea una función que reciba un array de números y devuelva un array con cada número dividido por su índice en el array más 2, es decir index + 2

const numbersDivision = (numbers) => {
  const results = numbers.map((number, index) => {
    return number / (index + 2);
  });
  return results;
};
const numbersDivisionResult = numbersDivision([10, 20, 30]);
console.log(numbersDivisionResult);

//- Crea una función que reciba un array de palabras y devuelva un array con las mismas palabras en mayúsculas.

const wordsUpper = (words) => {
  const results = words.map((letter) => {
    return letter.toUpperCase();
  });
  return results;
};
const wordsUpperResult = wordsUpper(["hola", "que", "tal"]);
console.log(wordsUpperResult);

//- Crea una función que reciba un array de palabras y una letra. La función devolverá un array con las palabras que comiencen por esa letra, si no hay mostrará un mensaje por consola diciendo que ninguna palabra coincide.

const wordsAndLetter = (words, letter) => {
  const wordsWithThatLetter = words.filter((word) => {
    const formattedWord = word.toLowerCase();
    const formattedLetter = letter.toLowerCase();
    return formattedWord.startsWith(formattedLetter);
  });
  if (wordsWithThatLetter.length === 0) {
    return `No coincide con la letra ${letter}`;
  }
  return wordsWithThatLetter;
};
const wordsAndLetterResult = wordsAndLetter(["amiga", "ala", "casa"], "a");
console.log(wordsAndLetterResult);

//- Añade a la función anterior lo necesario para que funcione independientemente de mayusculas o minúsculas.

//- Crea una función que reciba un array de 10 números e imprima por consola la suma de todos los valores del array.

const tenNumbersAddition = (numbers) => {
  const addition = numbers.reduce((acc, number) => {
    return acc + number;
  });
  return addition;
};
const tenNumbersAdditionResult = tenNumbersAddition([
  1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
]);
console.log(tenNumbersAdditionResult);

//- Crea una función que reciba un array de 10 números, imprime por consola cada número, su cuadrado y su cubo en este formato: "Número: 2 - Cuadrado: 4 - Cubo: 8".

const squareAndCube = (numbers) => {
  numbers.forEach((number) => {
    console.log(
      `Número ${number} - Cuadrado ${Math.pow(number, 2)} - Cubo ${Math.pow(
        number,
        3
      )}`
    );
  });
};
squareAndCube([2, 3, 4, 5, 6, 7, 8, 9, 10, 1]);

//- Crea una función que reciba una palabra e imprima por consola esa palabra pero con las vocales en mayúscula.

const vowelsUpper = (word) => {
  const wordToArray = word.split("");
  const vowels = "aeiou";
  const finalWorld = wordToArray.reduce((acc, letter) => {
    if (vowels.includes(letter)) {
      return acc + letter.toUpperCase();
    }
    return acc + letter;
  });
  console.log(finalWorld);
};
vowelsUpper("camomila");

//- Crea una función que reciba un array de 10 números. Dentro de esa función crea dos arrays llamados even (pares) y odd (impares), después multiplica cada uno de los números del array recibido por un número aleatorio entre 1 y 10, si el resultado es par, guárdalo en el array de pares, si es impar, en el array de impares, al final, imprime los 3 arrays por consola.

const evenAndOdd = (numbers) => {
  const even = [];
  const odd = [];
  numbers.forEach((number) => {
    const randomNumber = Math.floor(Math.random() * 10 + 1);
    const result = randomNumber * number;
    if (result % 2 === 0) even.push(result);
    else odd.push(result);
  });
  console.log(numbers);
  console.log(odd);
  console.log(even);
};
evenAndOdd([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);

//- Crea una función que reciba un array con 5 palabras, debes imprimir por consola un array que contenga la inicial y la última letra de cada palabra en mayúsculas, es decir, si nuestra función recibiera un array con ['hola', 'adios', 'gato', 'perro', 'casa'] deberá imprimir por consola ['H', 'A', 'A', 'S', 'G', 'O', 'P','O', 'C', 'A']. Si te quedas atascado puedes investigar la función flatMap() y flat()

const fiveWords = (words) => {
  const newArray = words.flatMap((word) => {
    const upperWords = word.toUpperCase();
    return [upperWords.charAt(0), upperWords.charAt(word.length - 1)];
  });
  console.log(newArray);
};
fiveWords(["hola", "adios", "gato", "perro", "casa"]);

//- Crea una función que reciba un array de 10 números y te diga si alguno es mayor de 5.

const greaterThanFive = (numbers) => {
  const result = numbers.filter((number) => {
    return number > 5;
  });
  console.log(result);
};
greaterThanFive([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);

//- Crea una función que reciba un array de 5 palabras y un número y te devuelva un array con las palabras que tienen esa longitud, por ejemplo si le envias (['hola', 'adios', 'gato', 'perro', 'casa'], 4), te devolverá un array con ['hola', 'gato', 'casa'jfhdj

const wordsOfNumberLength = (words, number) => {
  const result = words.filter((word) => {
    return word.length === number;
  });
  console.log(result);
};
wordsOfNumberLength(["hola", "adios", "gato", "perro", "casa"], 4);

//- Crea una función que reciba un array de números y un número y te devuelva un array con los números que sean divisores de ese número. resto 0

const numbersDivisible = (numbers, divider) => {
  const result = numbers.filter((number) => {
    return number % divider === 0;
  });
  console.log(result);
};
numbersDivisible([10, 7, 30], 2);

//- Crea una función que reciba este array y te devuelva sólo los usuarios cuya edad sea menor de 30

//const minorThirty = (users) => {
//const result = minorThirty.age.filter((age) => {
//if (age < 30) {
//console.log("hola");
//}
//});
//console.log(result);
//};
//minorThirty([
//{ name: "John", age: 25 },
//{ name: "Jane", age: 30 },
//{ name: "Bob", age: 20 },
//]);

//- Crea una función que reciba un array relleno con números y te diga si todos son pares o no.

const areEvenOrOdd = (numbers) => {
  numbers.filter((number) => {
    if (number % 2 === 0) {
      console.log(`El número ${number} es par.`);
    } else {
      console.log(`El número ${number} es impar.`);
    }
  });
};
areEvenOrOdd([1, 2, 3, 4, 5, 6]);
//- Crea una función que reciba un array de 5 palabras y las ordene en base a su longitud, de menor a mayor.

const shortestWord = (words) => {
  const wordLenght = words.length;
  const result = words.sort((a, b) => a.localeCompare(b));
  console.log(result);
};
shortestWord(["casa", "perrito", "amígdala"]);

//- Crea una función que reciba una palabra e imprima la misma palabra en orden inverso conservando las mayúsculas y las minúsculas. Si recibe "Mariposas" deberá imprimir "sasopiraM". No se puede usar reverse() 😊 (investiga la función reduceRight)

const wordReverse = (word) => {};
wordReverse(["Mariposa"]);
//## Retos!!

//- Crea una función que reciba un array de 5 números de 2 dígitos. La función debe ser capaz de sumar los digitos de cada número, es decir si yo le envío [21, 34, 87, 10, 28] la función tendrá que ser capaz de devolverme un array con [3, 7, 15, 1, 10]

//- Utilizando el array que te dejo a continuación resuelve estos dos retos.
//  - Crea una función que reciba un criterio de ordenación y ordene el array en base a ese criterio. Puede ser el nombre, el apellido o la edad.
//  - Crea una función que reciba un id de usuario y borre ese usuario del array.

const users = [
  {
    id: "user001",
    name: "Juan",
    surname: "Pérez",
    age: 30,
  },
  {
    id: "user002",
    name: "María",
    surname: "González",
    age: 25,
  },
  {
    id: "user003",
    name: "Pedro",
    surname: "Sánchez",
    age: 35,
  },
  {
    id: "user004",
    name: "Ana",
    surname: "Martínez",
    age: 28,
  },
  {
    id: "user005",
    name: "Luis",
    surname: "López",
    age: 40,
  },
];
