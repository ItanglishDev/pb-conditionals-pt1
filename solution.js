const int1 = 41;
const int2 = 91;
const int3 = -1489;

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

//     EXERCISE 3

console.log("EXERCISE 3-----------------");
const a = 33;
const b = -456;
const c = 122;

if (a > b && a > c) {
  console.log(a, "is the largest number");
} else if (b > a && b > c) {
  console.log(b, "is the largest number");
} else {
  console.log(c, "is the largest number");
}

if (int1 > int2 && int1 > int3) {
  console.log(int1, "is the largest number");
} else if (int2 > int1 && int2 > int3) {
  console.log(int2, "is the largest number");
} else {
  console.log(int3, "is the largest number");
}

//             EXERCISE 4
console.log("------------------------EXERCISE 4");
