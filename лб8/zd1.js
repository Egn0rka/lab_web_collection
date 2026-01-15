function myFunct1() {

  let number = prompt("Введіть тризначне число:");

  number = Number(number);

  let secondDigit = Math.floor((number % 100) / 10);

  alert("Друга цифра вашого числа: " + secondDigit);

}
const button = document.getElementById("zvd1");
button.addEventListener("click", myFunct1);

function myFunct2() {

  let Money = prompt("Введіть суму грошей у гаманці:");
  let Price = prompt("Введіть ціну однієї шоколадки:");
    Money = Number(Money);
    Price = Number(Price);
    let chocolates = Math.floor(Money / Price);
    let change = Money % Price;
   alert("Ви можете купити " + chocolates + " шоколадок. Здача: " + change + " грн.");
}
const button2 = document.getElementById("zvd2");
button2.addEventListener("click", myFunct2);

function myFunct3() {

 
let num1 = prompt("Введіть перше число:");
let num2 = prompt("Введіть друге число:");
num1 = Number(num1);
num2 = Number(num2);

let max;
if (num1 > num2) {
  max = num1;
} else if (num2 > num1) {
  max = num2;
} else {
  max = "Числа рівні";
}
alert("Більше число: " + max);
}
const button3 = document.getElementById("zvd3");
button3.addEventListener("click", myFunct3);

function myFunct4() {

    let circleLength = prompt("Введіть довжину кола:");
    let squarePerimeter = prompt("Введіть периметр квадрата:");
    circleLength = Number(circleLength);
    squarePerimeter = Number(squarePerimeter);
    let radius = circleLength / (2 * Math.PI);
    let side = squarePerimeter / 4;
    if (radius <= side / 2) {
        alert("Таке коло може поміститися у зазначений квадрат.");
    } else {
        alert("Таке коло не може поміститися у зазначений квадрат.");
    }
}
const button4 = document.getElementById("zvd4");
button4.addEventListener("click", myFunct4);
