// Module ID: 6449
// Function ID: 6450
// Name: isObject
// Dependencies: []

// Module 6449 (isObject)

export default function isObject(fn) {
  let tmp = fn;
  if (tmp) {
    tmp = typeof fn === "function" || typeof fn === "object";
  }
  return tmp;
};
