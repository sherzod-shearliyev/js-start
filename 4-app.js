// nuber methods
let num1 = 1_000_000;
let myNum = 4.1

// rounding 

console.log(Math.round(myNum)); // normal yaxlitlash
console.log(Math.ceil(myNum)); // paydo bo'lgan sonni yuqoriga qarab yaxlitlaydi
console.log(Math.floor(myNum)); // pastga qarab yaxlitlaydi
console.log(Math.trunc(myNum)); // butun qismini yaxlitlaydi

// isNaN() - son emasmi
// NaN - not a number - son emas 
console.log(isNaN('abs')); //false
console.log(isNaN(NaN===NaN)); // false

// isFinite() - cheksiz emasmi
console.log(isFinite(abs)); // false
console.log(isFinite(10)); // true
console.log(isFinite(Infinity));// false

// parseInt() - stringni butun songa aylantiradi
console.log(parseInt('100px')); // 100

// parseFloat() - stringni o'nlik songa aylantiradi
console.log(parseFloat('3.14px')); // 3.14

//toFixed() - sonni belgilangan o'nlik raqamlar soniga yaxlitlaydi va natijani string sifatida qaytaradi
let num2 = 123.456789012345;
console.log(num2.toFixed(3));//string
console.log(+num2.toFixed(3));// number

//random() - 0 va 1 orasida tasodifiy son qaytaradi
let randomNumber = Math.random(Math.floor() * 100); // 0 va 1 orasida tasodifiy son
console.log(randomNumber);

//max and min
console.log(Math.max(1, 5, 3)); // eng katta sonni topadi
console.log(Math.min(1, 5, 3)); // eng kichik sonni topadi

//pow() - sonni darajaga ko'taradi
console.log(Math.pow(2, 3)); // 2 ning 3-darajasi
console.log(2 ** 3); // 2 ning 3-darajasi
console.log(Math.abs(-123));//musbat sanga aylantiradi