console.log("1.-----------------------");
//Funkcijos
//Lengvesni
//Sukurkite funkciją kuri priimtų du kintamuosius, juos sudaugintų ir atspausdintų sandaugą į konsolę.

function multiplyTwoDigits(number1, number2) {
  console.log(number1 * number2);
}

multiplyTwoDigits(2, 5);

console.log("2.----------------------");

//Sukurkite funkciją kuri priimtų vieną kintamąjį, vardą. Ir konsolėje išspausdintų “labas “ ir tą paduotą vardą.
function greet(name) {
  console.log(`Labas ${name}`);
}

greet("Aivaras");

console.log("3.----------------------");

//Sukurkite funkciją  kuri priimtų vieną kintamąjį, tekstą. Ir konsolėje išspausdintų kiek simbolių yra tame tekste.
function countTextSymbols(text) {
  console.log(text.length);
}

countTextSymbols("Sveiki visi, geros dienos!");

console.log("4.----------------------");

//Sukurkite funkciją kuri priimtų 2 kintamuosius tekstus, vardą, pavardę ir atspausdintų inicialus. T.y vardo ir pavardės pirmąsias raides DIDŽIOSIOMIS raidėmis.

function initials(name, surname) {
  const firstNameInitial = name.charAt(0).toUpperCase();
  const lastNameInitial = surname.charAt(0).toUpperCase();

  console.log(`${firstNameInitial}.${lastNameInitial}.`);
}

initials("Jonas", "Pranaitis");

console.log("5.----------------------");

//Sukurkite HTML div’ą su id “numberPlace”. Parašykite funkciją kuri priimtų kintamąjį, skaičių ir jį atspausdintų tame HTML elemente.

function printNumber(number) {
  let numberDiv = document.getElementById("numberPlace");

  if (numberDiv) {
    numberDiv.innerHTML = `Skaicius: ${number}`;
  } else {
    console.error("Nerasta!");
  }
}

printNumber(26234);

console.log("6.----------------------");

//Parašykite funkciją kuri nustatytų kas bus sekantis Lt prezidentas.

console.log("7.----------------------");

//7.Parašykite funkciją kuri priimtų du kintamuosius “nuo” ir “iki”.
// Funkcija turi sugeneruoti random skaičių tame intervale ir jį GRAŽINTI.

function getRandomNumber(min, max) {
  const randomDecimal = Math.random();
  const randomNumber = min + randomDecimal * (max - min);

  return Math.floor(randomNumber);
}
const randomNum = getRandomNumber(4, 24);

console.log(randomNum);

console.log("8.----------------------");

//8. Parašykite funkciją kuri sugeneruotų 3 random skaičius nuo 0 iki 5 ir atspausdintų konsolėje vienoje eilutėje atskirtus kableliais.
// Po paskutinio skaičiaus kablelio neturi būti.

function getThreeRandomNumbers() {
  let number1 = Math.floor(Math.random() * 6);
  let number2 = Math.floor(Math.random() * 6);
  let number3 = Math.floor(Math.random() * 6);

  console.log(`${number1}, ${number2}, ${number3}`);
}

getThreeRandomNumbers();

console.log("9.----------------------");

//9.Sukurkite HTML div’ą su id “sequence”. Parašykite funkciją kuri sugeneruotų 10 p tagų su skaičiais juose nuo 1 iki 10 ir atiduotų į tą HTML elementą.
// Rezultate HTML’e turi matytis 10 p tagų su skaičiais. Šie TURI BŪTI SUGENERUOTI JAVASCRIPTU.

let sequenceDiv = document.getElementById("sequence");

if (sequenceDiv) {
  for (let i = 1; i <= 10; i++) {
    let pTag = document.createElement("p");
    pTag.textContent = i;
    sequenceDiv.appendChild(pTag);
  }
}

console.log("10.----------------------");
//10.Susigalvokite patys :)
//Later

console.log("1.Vid----------------------");

//Vidutiniai
//1. Sukurkite funkciją kuri pakeltų paduotą skaičių n laipsniu, ir gražintų reikšmę (paduodate du parametrus, skaičių ir laipsnį)
// NENAUDOTI jau esamų js funkcijų! Nenaudoti ** operatoriaus! Galima naudoti for, if, kintamuosius.

function power(base, exponent) {
  if (exponent == 0) {
    return 1;
  } else {
    let result = 1;
    for (let i = 0; i < exponent; i++) {
      result *= base;
    }
    return result;
  }
}

let result = power(5, 4);
console.log(result);

console.log("2.----------------------");

//2. Sukurkite funkciją kuri priims tris parametrus. skaičių, laipsnį ir HTML elemento id.
// Ši funkcija naudos pirmają funkciją ir jos rezultatą gražins į HTML elementą.

function power(base, exponent) {
  return Math.pow(base, exponent);
}

function printResultInHtml(base, exponent, htmlElementId) {
  let result = power(base, exponent);

  let htmlElement = document.getElementById(htmlElementId);

  htmlElement.innerHTML = `Rezultatas: ${result}`;
}

printResultInHtml(5, 4, "resultElement");

console.log("1Sunk.----------------------");

//Sunkesni
//1.Parašykite funkciją, kurios argumentas būtų tekstas, kuris yra įterpiamas į h1 tagą;

function insertIntoH1(text) {
  let h1Element = document.getElementById("myH1");

  if (h1Element) {
    h1Element.innerHTML = text;
  } else {
    let newH1 = document.createElement("h1");
    newH1.innerHTML = text;

    document.body.appendChild(newH1);
  }
}

let text = "Mano nauja antraštė";
insertIntoH1(text);

console.log("2.----------------------");

//Parašykite funkciją su dviem argumentais, pirmas argumentas tekstas, įterpiamas į h tagą, o antrasis tago numeris (1-6).
// Rašydami šią funkciją remkitės pirmame uždavinyje parašytą funkciją;

function insertIntoHTag(text, number) {
  let hTag = "h" + number;
  let insertedText = `<${hTag}>${text}</${hTag}`;
  document.write(insertedText);
}

insertIntoHTag("Sveiki! H5 tag", 5);

console.log("3.----------------------");

//3. Sugeneruokite atsitiktinį stringą iš raidžių ir skaičių.
//Visus skaitmenis stringe įdėkite į h1 tagus. Raides dėktie į p tagus.
//Jegu iš eilės eina keli skaitmenys, juos į tagą reikią dėti kartu (h1 atsidaro prieš pirmą ir užsidaro po paskutinio) Keitimui naudokite pirmo patobulintą (jeigu reikia) uždavinio funkciją.

function generateRandomString(length) {
  const characters =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  let randomString = "";

  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * characters.length);
    randomString += characters.charAt(randomIndex);
  }

  return randomString;
}

const randomString = generateRandomString(12);

console.log(`Atsitiktinis stringas: ${randomString}`);

// nepabaigiau

console.log("4.----------------------");

//4.Parašykite funkciją, kuri skaičiuotų,
// iš kiek sveikų skaičių jos argumentas dalijasi be liekanos (išskyrus vienetą ir patį save).

function countDivisors(n) {
  if (n < 2) {
    console.log("Skaicius turi buti didesnis nei 1");
    return 0;
  }

  let count = 0;

  for (let i = 2; i <= n / 2; i++) {
    if (n % i == 0) {
      count++;
    }
  }

  return count;
}

let number = 20;
let divisorCount = countDivisors(number);
console.log(`Skaicius ${number} dalijasi be liekanos is ${divisorCount}`);

console.log("5.----------------------");

//5.Sugeneruokite masyvą iš 100 elementų, kurio reikšmės atsitiktiniai skaičiai nuo 33 iki 77.
//Išrūšiuokite masyvą pagal daliklių be liekanos kiekį mažėjimo tvarka, panaudodami ketvirto uždavinio funkciją.

let array = [];

for (let i = 0; i < 100; i++) {
  let randomNumber = Math.floor(Math.random() * (77 - 33 + 1)) + 33;
  array.push(randomNumber);
}

console.log(`Nerikiuotas: ${array}`);

array.sort((a, b) => countDivisors(b) - countDivisors(a));

console.log(
  `Surikiuotas masyvas pagal dalikliu be liekanos kieki mažejimo tvarka: ${array}`
);

console.log("6.----------------------");

//6.Sugeneruokite masyvą iš 100 elementų, kurio reikšmės atsitiktiniai skaičiai
//nuo 333 iki 777. Naudodami 4 uždavinio funkciją iš masyvo ištrinkite pirminius skaičius.

let array2 = [];

for (let i = 0; i < 100; i++) {
  let randomNumber2 = Math.floor(Math.random() * (777 - 333 + 1)) + 333;
  array2.push(randomNumber2);
}

console.log(`Nerikiuotas: ${array2}`);

let nonPrimeNumbers = array.filter((number) => countDivisors(number) == 0);

console.log(`Masyvas be pirminiu skaiciu ${nonPrimeNumbers}`);

console.log("7.----------------------");

//7.Sugeneruokite atsitiktinio (nuo 10 iki 20) ilgio masyvą, kurio visi, išskyrus paskutinį,
// elementai yra atsitiktiniai skaičiai nuo 0 iki 10, o paskutinis masyvas, kuris generuojamas pagal tokią pat salygą kaip ir pirmasis masyvas.
// Viską pakartokite atsitiktinį nuo 10 iki 30  kiekį kartų. Paskutinio masyvo paskutinis elementas yra lygus 0;

function generateArray() {
  let length = Math.floor(Math.random() * 11) + 10; // ilgis
  let array = Array.from({ length }, () => Math.floor(Math.random() * 11)); //random skaiciai 0 iki 10
  let lastArray = Array.from({ length }, () => Math.floor(Math.random() * 11));

  lastArray[length - 1] = 0;

  array.push(lastArray);

  return array;
}

const numberOfArrays = Math.floor(Math.random() * 21) + 10;

for (let i = 0; i < numberOfArrays; i++) {
  let randomArray = generateArray();
  console.log(randomArray);
}

console.log("8.----------------------");

//8.Suskaičiuokite septinto uždavinio elementų, kurie nėra masyvai, sumą.
// Skaičiuoti reikia visuose masyvuose ir submasyvuose.

function nonArrayElementsSum(arr) {
  let sum = 0;

  arr.forEach((element) => {
    if (Array.isArray(element)) {
      sum += nonArrayElementsSum(element);
    } else {
      sum += element;
    }
  });

  return sum;
}

let totalSum = 0;

for (let i = 0; i < numberOfArrays; i++) {
  let randomArray = generateArray();
  console.log(randomArray);
  totalSum += nonArrayElementsSum(randomArray);
}

console.log(`Ne masyvinių elementų suma: ${totalSum}`);

console.log("9.----------------------");

//9.Sugeneruokite masyvą iš trijų elementų, kurie yra atsitiktiniai skaičiai nuo 1 iki 33.
// Jeigu tarp trijų paskutinių elementų yra nors vienas ne pirminis skaičius, prie masyvo pridėkite dar vieną elementą- atsitiktinį skaičių nuo 1 iki 33.
// Vėl patikrinkite pradinę sąlygą ir jeigu reikia pridėkite dar vieną elementą. Kartokite, kol sąlyga nereikalaus pridėti elemento.

//custom random array generator
function generateRandomArray(length, min, max) {
  const randomArray = [];

  for (let i = 0; i < length; i++) {
    const randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
    randomArray.push(randomNumber);
  }

  return randomArray;
}

function isPrime(num) {
  if (num <= 1) {
    return false;
  }
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i == 0) {
      return false;
    }
  }
  return true;
}

const myRandomArray1 = generateRandomArray(3, 1, 33);
console.log(myRandomArray1);

function addRandomElementIfNeeded(array, min, max) {
  const lastThreeElements = array.slice(-3);

  const isNonPrimeExist = lastThreeElements.some(
    (element) => !isPrime(element)
  );

  if (isNonPrimeExist) {
    const newRandomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
    array.push(newRandomNumber);

    addRandomElementIfNeeded(array, min, max);
  }
}

addRandomElementIfNeeded(myRandomArray1, 1, 33);

console.log(myRandomArray1);

console.log("10.----------------------");

//10.Sugeneruokite masyvą iš 10 elementų, kurie yra masyvai iš 10 elementų, kurie yra atsitiktiniai skaičiai nuo 1 iki 100.
//Jeigu tokio didelio masyvo (ne atskirai mažesnių) pirminių skaičių vidurkis mažesnis už 70, suraskite masyve mažiausią skaičių (nebūtinai pirminį) ir prie jo pridėkite 3.
//Vėl paskaičiuokite masyvo pirminių skaičių vidurkį ir jeigu mažesnis nei 70 viską kartokite.

// [
//   [1,2,3,4,5,6,7,8,9,100], // random nuo 1 iki 100 pasidaryti
//   [1,2,3,4,5,6,7,8,9,100],
//   [1,2,3,4,5,6,7,8,9,100],
//   [1,2,3,4,5,6,7,8,9,100],
//   [1,2,3,4,5,6,7,8,9,100],
//   [1,2,3,4,5,6,7,8,9,100],
//   [1,2,3,4,5,6,7,8,9,100],
//   [1,2,3,4,5,6,7,8,9,100],
//   [1,2,3,4,5,6,7,8,9,100],
//   [1,2,3,4,5,6,7,8,9,100]
// ]

// for (let i = 0; i <= 10; i++) {

// }

// let arrayFromTen = []