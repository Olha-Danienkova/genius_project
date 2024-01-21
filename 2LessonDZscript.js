//1//

// Якщо змінна більше нуля - виведіть true, менше - false
//Перевірте це на варіантах  1, 0, -3.

//const a=1;
//if (a>0) {
//    console.log("true")
//}
//else {console.log("false")}; //true

//const a=0;
//if (a>0) {
//    console.log("true")
//}
//else {console.log("false")}; //false

//const a=-3;
//if (a>0) {
//    console.log("true")
//}
//else {console.log("false")}; //false

//*************************************************
//2//

// Якщо змінна ="test" - виведіть true,
//Перевірте це на варіантах  'test', "qwerty", true

//let a = "test";
//if (a === "test") {
//console.log("true"); //true
//} else {
//console.log("false"); 
//}

//let a = "qwerty";
//if (a === "test") {
//console.log("true");
//} else {
//console.log("false"); //false
//}

//let a = "true";
//if (a === "test") {
//console.log("true");
//} else {
//console.log("false"); //false
//}

//************************************************
//3//

// Якщо змінна більше 10 -  відніміть 5,
//менше - додайте 5, результат виведіть в консоль
//Перевірте це на варіантах  1, 10, 13.

//let a=1;
//if (a>10)
//{console.log(a-5);
//}
//else if (a<10)
//{console.log(a+5);} // 6
//else {
//console.log("no");
//} 

//let a=10;
//if (a>10)
//{console.log(a-5);
//}
//else if (a<10)
//{console.log(a+5);}
//else {
//   console.log("no");
//} // no

//let a=13;
//if (a>10)
//{console.log(a-5); // 8
//}
//else if (a<10)
//{console.log(a+5);}
//else {
//   console.log("no");
//} 

//****************************************************************************
//4//

//Зробіть сервіс який отримує число від 1 до 12
// виведіть місяць який дорівнює числу

/*const value = prompt("Введіть число від 1 до 12, відповідно до місяців року");
let cost;

switch (value) {
  case "1":
    cost = "January";
    alert(cost);
    break;
  case "2":
    cost = "February";
    alert(cost);
    break;
  case "3":
    cost = "March";
    alert(cost);
    break;
  case "4":
    cost = "April";
    alert(cost);
    break;
  case "5":
    cost = "May";
    alert(cost);
    break;
  case "6":
    cost = "June";
    alert(cost);
    break;
  case "7":
    cost = "July";
    alert(cost);
    break;
  case "8":
    cost = "August";
    alert(cost);
    break;
  case "9":
    cost = "September";
    alert(cost);
    break;
  case "10":
    cost = "October";
    alert(cost);
    break;
  case "11":
    cost = "November";
    alert(cost);
    break;
  case "12":
    cost = "December";
    alert(cost);
    break;
    
  default:
    alert(`Такого місяця не існує, спробуйте ще раз`);
    const value = prompt("Введіть число від 1 до 12, відповідно до місяців року");
}*/


//****************************************************************************
//5//

//Зробіть сервіс який отримує тризначне число
//Поверніть користувачу сумму цих чисел

/*
let num = prompt("Please enter a three-digit number!");

let arr = String(num).split(''); // розбиває рядок на символи
console.log(arr);   

let str = String(num); 
console.log(str.length); // виводить в консоль кiлькiсть символiв

if(str.length === 3)
{
let sum = 0;
  for (let digit of arr) {
    sum += Number(digit); // перетворює рядок на цифри
  }
  alert(sum);} //виводить суму цифр

  else {
    let message = "Refresh the page and enter a THREE-DIGIT NUMBER!";
    alert(message);
}
*/

