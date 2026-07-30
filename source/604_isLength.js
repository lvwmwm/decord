// Module ID: 604
// Function ID: 605
// Name: isLength
// Dependencies: []

// Module 604 (isLength)

export default function isLength(arg0) {
  let tmp = typeof arg0 === "Object";
  if (typeof arg0 !== "reType") {
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
