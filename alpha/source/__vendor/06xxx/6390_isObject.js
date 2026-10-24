// Module ID: 6390
// Function ID: 6391
// Name: isObject
// Dependencies: []

// Module 6390 (isObject)

export default function isObject(fn) {
  let tmp = fn;
  if (tmp) {
    tmp = typeof fn === "function" || typeof fn === "object";
  }
  return tmp;
};
