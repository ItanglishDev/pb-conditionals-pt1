let int1 = 51;
let int2 = 84;

if (int1 >= 50 && int1 <= 99 && int2 >= 50 && int1 <= 99) {
  console.log("Both are true");
} else if (int1 >= 50 && int1 <= 99 && int2 < 50 && int1 > 99) {
  console.log("The first one is true and the second one is false");
} else if (int1 < 50 && int1 > 99 && int2 < 50 && int1 > 99) {
  console.log("Both are false");
} else {
  console.log("The first one is false and the second one is true");
}

// if (int2 >= 50 && int1 <= 99) {
//   console.log("true");
// } else {
//   console.log("false");
// }
// EXERCISE 2
