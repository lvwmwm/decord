// Module ID: 5329
// Function ID: 5330
// Name: isObject
// Dependencies: []

// Module 5329 (isObject)

export default function isObject(fn) {
  let tmp = fn;
  if (tmp) {
    tmp = typeof fn === "function" || typeof fn === "object";
  }
  return tmp;
};
