// Module ID: 12470
// Function ID: 95301
// Dependencies: []

// Module 12470
let num = 0;
let tmp2 = num;
let num2 = 0;
do {
  do {
    let tmp3 = tmp2 >>> 1;
    let tmp4 = 1 & tmp2 ? 3988292384 ^ tmp3 : tmp3;
    num2 = num2 + 1;
    tmp2 = tmp4;
  } while (num2 < 8);
  tmp[num] = tmp4;
  num = num + 1;
} while (num < 256);
