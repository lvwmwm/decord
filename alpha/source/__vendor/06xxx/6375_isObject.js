// Module ID: 6375
// Function ID: 6376
// Name: isObject
// Dependencies: []

// Module 6375 (isObject)

export default function isObject(fn) {
  let tmp = fn;
  if (tmp) {
    tmp = typeof fn === "function" || typeof fn === "object";
  }
  return tmp;
};
