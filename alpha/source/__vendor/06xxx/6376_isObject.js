// Module ID: 6376
// Function ID: 6377
// Name: isObject
// Dependencies: []

// Module 6376 (isObject)

export default function isObject(fn) {
  let tmp = fn;
  if (tmp) {
    tmp = typeof fn === "function" || typeof fn === "object";
  }
  return tmp;
};
