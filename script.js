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

//1.
function fun1(...numbers) {
  let numberfun1 = 0;
  for (let item of numbers) {
    numberfun1 += item;
  }
  return numberfun1;
}
let numberesult = fun1(10, 50, 6, 7, 8, 11, 6, 3, 9);
console.log(numberesult);

//2.
let user = {
  firstname: "giorgi",
  lastname: "saakadze",
  age: 32,
  isloggedin: true,
};

function printName(user) {
  if (user.isloggedin) {
    return `${user.firstname} ${user.lastname}`;
  }
  return false;
}

let resultPirntName = printName(user);
console.log(resultPirntName);

//3.

function getMax(...numbersMax) {
  let maxValue = 0;
  for (let i of numbersMax) {
    // console.log(i);
    if (i > maxValue) {
      maxValue = i;
    }
  }

  return maxValue;
}

let resultGetMax = getMax(5, 105, 250, 35);
console.log(resultGetMax);

//4./
function test(item) {
  if (item % 2 == 0) {
    return "even";
  }
  return "odd";
}

let returnTesstResult = test();
console.log(returnTesstResult);

//5.
let array = [1, 2, 3, 4, 5];

for (let i = array.length - 1; i >= 0; i--) {
  console.log(array[i]);
}
