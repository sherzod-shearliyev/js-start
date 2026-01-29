// data types in javascript

// primitive data types - sodda, oddiy ma'lumot turlari 
// primitive - bir ozgaruvchi,bir qiymat

//1. string-yozuv
let username = 'jamshid';
let userage = "15";

// console.log('oquvchilardan ' + username + ' darsga kelmadi. U '  + userage + ' yoshda ');
// console.log(`oquvchilardan ${username} darsga kelmadi. U  ${userage} yoshda.`);

//2.number - sonlar
let num = 1_000_000;
//console.log(Number.MAX_SAFE_INTEGER);
//console.log(Number.MIN_SAFE_INTEGER);
//3.boolean - mantiqiy qiymat(true/false)
let num1 = 50;
let num2 = 10;
console.log(num1 > num2);
//4.undefined - aniqlanmagan
let x;
console.log(x);
//5.null - bo'sh qiymat
let abc = null;
//6.symbol - noyob identifikator
let id = Symbol('id');
let person = {
    name: 'jamshid',
    [id]: 12345
};

//7.bigint - juda katta sonlar uchun
// non-primitive data types - murakkab ma'lumot turlari
// non-primitive - bir nechta qiymatlarni o'z ichiga olishi mumkin bo'lgan ma'lumot turlari
//1.object - arraylar, funksiyalar, obyektlar
//2.array - massivlar
//3.function - funksiyalar


//key - value juftliklari
let user = {
    name: 'jamshid',
    age: 15,
   birthplace: 'urgench',
   nationality: 'uzbek',
   state: 'urgench',
   middlename: 'middlename',
   id: 1234567,
   phone: 998901234567,
   isstudent: true,
   cardnumber: null,
   email: undefined,
   BigIntexample: 9007199254741991n,
   language: Symbol('uzbek')
};
console.table(user);
   //array
 let  language: ('uzbek')