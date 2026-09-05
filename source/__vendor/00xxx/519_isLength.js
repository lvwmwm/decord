// Module ID: 519
// Function ID: 520
// Name: isLength
// Dependencies: []

// Module 519 (isLength)

export default function isLength(num) {
  let tmp = typeof num === "number";
  if (typeof num === "number") {
    tmp = num > -1;
  }
  if (tmp) {
    tmp = num % 1 === 0;
  }
  if (tmp) {
    tmp = num <= 9007199254740991;
  }
  return tmp;
};
