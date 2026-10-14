// Module ID: 5656
// Function ID: 5657
// Name: isObject
// Dependencies: []

// Module 5656 (isObject)

export default function isObject(fn) {
  let tmp = fn;
  if (tmp) {
    tmp = typeof fn === "function" || typeof fn === "object";
  }
  return tmp;
};
