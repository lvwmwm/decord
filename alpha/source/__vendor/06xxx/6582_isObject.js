// Module ID: 6582
// Function ID: 6583
// Name: isObject
// Dependencies: []

// Module 6582 (isObject)

export default function isObject(fn) {
  let tmp = fn;
  if (tmp) {
    tmp = typeof fn === "function" || typeof fn === "object";
  }
  return tmp;
};
