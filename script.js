"use strict";
// let number = 100;
// if (number < 50) {
//   console.log("ნაკლებია50ზ");
// } else if (number > 20) {
//   console.log("მეტია20ზე");
// } else {
//   console.log("შეცდომა");
// }
// // 1.
// let name1 = "მარიამი";
// let result = name1 == "მარიამი" ? "true" : "fasl";
// console.log(result);
// // 3.
// let name2 = "მარიამ";
// switch (name2) {
//   case "მარიამ":
//     console.log("true");

//     break;

//   default:
//     console.log("fals");
// }

// //--------------------------------------------------------------------task2---------------------------------------------------------------
// //1.
// for (let i = 5; i < 101; i++) {
//   console.log(i);
// }
// //2.
// let array1 = [1, 2, 4, -1, -3, 8, 7, 0, -5, 18, 12];
// for (let item of array1) {
//   if (item > 0 && item < 10) {
//     console.log(item);
//   }
// }
// //3.
// let array2 = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// for (let item of array2) {
//   if (item == 5) {
//     break;
//   }
//   console.log(item);
// }
// //4,5
// let array3 = [1, 2, 3, 4, 5];

// let sum = 0;

// for (let item of array3) {
//   sum += item;
// }
// console.log(sum);

// let result2 = sum / array3.length;

// console.log(result2);

// //6.
// let array5 = [1, 2, 3, 7, 6, 9];
// for (let item of array5) {
//   if (item == 7) {
//     continue;
//   }
//   console.log(item);
// }
// //7.
// let user = {
//   firstname: "giorgi",
//   lastname: "smith",
//   age: 25,
//   studentstatus: "active",
// };
// console.log(user.studentstatus);
// //8.
// let user1 = {
//   name: "giorgi",
//   age: 20,
//   studentstatus: "active",
// };
// if (user1.age < "18" && studentstatus == "active ") {
//   console.log("heloo");
// } else if (user1.name == "ლევან") {
//   console.log(" hello levani");
// } else if (user1.studentstatus == "active" || age < 25) {
//   console.log("hello world");
// } else {
//   console.log(error);
// }
// //9.
// let array = [2, 3, 5, 10, 25, 24, 11, 100, 6, 7, 10];

// if (array % 2 == 0) {
//   console.log("array");
// }
// //10.
// let users = [
//   { username: "giorgi", status: false },
//   { username: "levani", status: false },
//   { username: "anna", status: true },
// ];
// for (let item of users) {
//   if (item.status == true) {
//     console.log(item);
//   }
// }

//-----------------------------------------------------------------------------------------------------------------------------------
//task3

// //1.
// function fun1(...numbers) {
//   let numberfun1 = 0;
//   for (let item of numbers) {
//     numberfun1 += item;
//   }
//   return numberfun1;
// }
// let numberesult = fun1(10, 50, 6, 7, 8, 11, 6, 3, 9);
// console.log(numberesult);

// //2.
// let user = {
//   firstname: "giorgi",
//   lastname: "saakadze",
//   age: 32,
//   isloggedin: true,
// };

// function printName(user) {
//   if (user.isloggedin) {
//     return `${user.firstname} ${user.lastname}`;
//   }
//   return false;
// }

// let resultPirntName = printName(user);
// console.log(resultPirntName);

// //3.

// function getMax(...numbersMax) {
//   let maxValue = 0;
//   for (let i of numbersMax) {
//     // console.log(i);
//     if (i > maxValue) {
//       maxValue = i;
//     }
//   }

//   return maxValue;
// }

// let resultGetMax = getMax(5, 105, 250, 35);
// console.log(resultGetMax);

// //4./
// function test(item) {
//   if (item % 2 == 0) {
//     return "even";
//   }
//   return "odd";
// }

// let returnTesstResult = test();
// console.log(returnTesstResult);

// //5.
// let array = [1, 2, 3, 4, 5];

// for (let i = array.length - 1; i >= 0; i--) {
//   console.log(array[i]);
// }

// --------------------------------------------task4-----------------------------------------------------

// // 1.
// let array1 = ["hello1", 14, 24, "hello2"];

// let filterarray = array1.filter((num) => num > 0);
// console.log(filterarray);

// //2.
// let array2 = [14, 150, "css", null, "javascript", 25];
// let newarray = array2.map((item) => {
//   if (typeof item == "number") {
//     return item * item;
//   } else if (typeof item == "string") {
//     return item.toUpperCase();
//   }
//   return item;
// });
// console.log(newarray);

// //3.
// let info = "Good day";

// let sliceinfo = info.slice(5, 8);
// console.log(sliceinfo);

// //4.
// function fanc2(word) {
//   return word;
// }

// let newfanc = fanc2("good morning");
// console.log(newfanc.length);
// //5.
// let useranswer = prompt("საქართველოს დედაქალაქი");
// let trueanswer = "თბილისი";
// let lowanswer = useranswer.toLowerCase();
// if (lowanswer == trueanswer) {
//   console.log("სწორია");
// } else {
//   console.log("არასწორია");
// }

// //6.
// let link = "https://google.com";

// function trueLink(myString) {
//   let trueeLink2 = myString.indexOf("https://");

//   if (trueeLink2 == -1) {
//     console.log("არ მოიცავს");
//   } else {
//     console.log("მოიცავს");
//   }
// }

// trueLink(link);

// //7.
// let fruits = ["apple", "mango", "avocado", "kiwi"];
// fruits.splice(-2, 1, "strawberry");
// console.log(fruits);
// //8.
// let array3 = [5, 25, 89, 120, 36];
// array3.push(" javascript", " python");
// array3.unshift("html", "css");
// array3.shift();
// array3.pop();
// console.log(array3);
// console.log(array3.length);
// //9.
// let fruits2 = ["ფორთოხალი", "ბანანი", "კივი"];
// fruits2.push("ვაშლი", "ანანსი");
// fruits2.unshift("საზამთრო");
// fruits2.splice(2, 0, "მანგო");
// fruits2.shift();
// fruits2.pop();

// console.log(fruits2.length);
// console.log(fruits2);
// //10.
// let array = [1, 2, 3, 4, 5];
// array.splice(2, 0, "a", "b", "c");
// console.log(array);
// //11.
// let arr = [1, 2, 3, 4, 5];
// let sum = 0;
// arr.forEach(function (item) {
//   sum += item;
// });
// console.log(sum);

// //12.
// let array4 = [12, 25, 3, 6, 8, 14, 7, 23];
// let newarray4 = array4.map((num) => num / 3);
// console.log(newarray4);
// //13.
// let languages = ["html", "css", "javascript", "python", "php"];
// let newarraylanguage = languages.filter((leng) => leng.length > 3);
// console.log(newarraylanguage);

// //14.
// let words = ["Madrid", "Rome", "Milan", "Berlin"];

// let newArrayWords = words.filter((el) => {
//   if (el.includes("m") || el.includes("M")) {
//     return true;
//   }
//   return false;
// });
// //15.
// let array5 = [-1, -2, -3, 4];
// array5.some((el) => el > 0); //--------
// console.log(array5);
// //16.
// let array6 = [15, 100, 25, 10, 36];
// array6.splice(-2, 1);
// console.log(array6);
//  ------------------------------------------------task5-------------------------------------------------

// //1
// let num = "12345";
// let array3New = num.split("");
// let sum2 = 0;
// array3New.forEach(function (item) {
//   sum2 += item;
// });
// console.log(sum2);
// //2

// /* <div class=“wraper”>
//  <img src=“რაღაცა სურათის მისამართი დაამატეთ” alt=“image”>
// <h2 class=“title”> image title </h2>
// </div>
// h2 ჯს დან დაუმატეთ წითელი ფონტის ფერი და ფროტის ზომა 30px */
// let newdivelement = document.createElement("div");
// let newimgelement = document.createElement("img");
// let newHelement = document.createElement("h2");
// newdivelement.classList.add("wraper");
// newimgelement.setAttribute(
//   "src",
//   "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTTgcZ_QaAYqL2b6FfEE1st9Pkr2D5fwTqzzg&usqp=CAU"
// );

// newimgelement.setAttribute("alt", "image");
// newHelement.classList.add("title");
// newHelement.textContent = "image title";
// newHelement.style.color = "red";
// newHelement.style.fontSize = "30px";
// document.getElementById("div-wraper").appendChild(newdivelement);
// document.querySelector(".wraper").appendChild(newimgelement);
// document.querySelector(".wraper").appendChild(newHelement);
// //3
// //  შექმენით სამი დივი htmlში, მიანიჭეთ ერთიდაიგივე კლასის სახელი და ყველა დივში დაამატეთ ჯს-დან შემდეგი კოდი:
// // <p class=“text”> hello </p>
// document.querySelectorAll(".div-element").forEach((item) => {
//   let newPelement = document.createElement("P");
//   newPelement.classList.add("text");
//   newPelement.textContent = "hello";

//   item.appendChild(newPelement);
// });
// // ------------------------------------------------------------task6--------------------------------------------------------------------------------
// //1.
// let inputToDo = document.getElementById("textInfo");
// let addBtn = document.getElementById("add-btn-input");
// let ulElement = document.getElementById("ul-items");
// let clearBtn = document.getElementById("clearAll");
// let formElement = document.getElementById("formElement");

// formElement.addEventListener("submit", function (e) {
//   e.preventDefault();

//   let valueInput = inputToDo.value;
//   if (valueInput == "") {
//     return;
//   }

//   let li = document.createElement("li");
//   li.textContent = valueInput;

//   let iconDelete = document.createElement("i");
//   iconDelete.classList.add("fa-solid", "fa-trash");

//   iconDelete.addEventListener("click", function () {
//     li.remove();
//   });

//   li.appendChild(iconDelete);
//   ulElement.appendChild(li);

//   inputToDo.value = "";
// });

// clearBtn.addEventListener("click", function () {
//   ulElement.innerHTML = " ";
// });

// //2.burger bar
// let navigation = document.getElementById("list-item");
// let burgerbar = document.getElementById("burger-bar");
// let logobutton = document.getElementById("logo");
// let headerWraper = document.getElementById("wraper");

// burgerbar.addEventListener("click", function () {
//   navigation.classList.toggle("nav-active");
//   logobutton.classList.toggle("active-logo");
//   headerWraper.classList.toggle("wraper-active");
//   burgerbar.classList.toggle("active");
// });
//--------------------------------------------------------------task7----------------------------------------------------------------------------

//1.
let requist = new XMLHttpRequest();

requist.addEventListener("load", function () {
  let mosuliInfoText = this.responseText;
  let mosuliInfoRogrocJs = JSON.parse(mosuliInfoText);
  let ul = document.createElement("ul");
  mosuliInfoRogrocJs.data.forEach((item) => {
    let span = document.createElement("span");
    span.classList.add("span-names");
    span.innerText = `${item.first_name} ${item.last_name} ${item.email} `;

    let li = document.createElement("li").appendChild(span);
    ul.appendChild(li);
  });
  document.getElementById("list").appendChild(ul);
});
requist.addEventListener("error", function () {
  let p = document.createElement("p");
  p.textContent = "Server Error";
  document.getElementById("list").appendChild(p);
});
requist.open("GET", "https://reqres.in/api/users?page=2");
requist.send();
