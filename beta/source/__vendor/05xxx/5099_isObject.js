// Module ID: 5099
// Function ID: 5100
// Name: isObject
// Dependencies: []

// Module 5099 (isObject)

export default function isObject(fn) {
  let tmp = fn;
  if (tmp) {
    tmp = typeof fn === "function" || typeof fn === "object";
  }
  return tmp;
};
