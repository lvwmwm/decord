// Module ID: 596
// Function ID: 7021
// Name: isLength
// Dependencies: []

// Module 596 (isLength)

export default function isLength(arg0) {
  let tmp = "number" === typeof arg0;
  if (tmp) {
    tmp = arg0 > -1;
  }
  if (tmp) {
    tmp = arg0 % 1 === 0;
  }
  if (tmp) {
    tmp = arg0 <= 9007199254740991;
  }
  return tmp;
};
