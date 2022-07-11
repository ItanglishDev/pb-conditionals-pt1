let int1 = 41;
let int2 = 91;
let int3 = 1489;

if (int1 >= 50 && int1 <= 99 && int2 >= 50 && int2 <= 99) {
  console.log("Both are true");
} else if (int1 >= 50 && int1 <= 99 && int2 < 50 && int2 > 99) {
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

/**
 *  let int1 = 51;
    let int2 = 84;
    let int3 = 1489;
 */

console.log("-----------------Exercise 2");

if (
  (int1 >= 50 && int1 <= 99) ||
  (int2 >= 50 && int2 <= 99) ||
  (int3 >= 50 && int3 <= 99)
) {
  console.log("There is one true");
}
//   int1 < 50 && int1 > 99 && int2 < 50 && int2 > 99 && int3 < 50 && int3 > 99;
else console.log("All are false");
