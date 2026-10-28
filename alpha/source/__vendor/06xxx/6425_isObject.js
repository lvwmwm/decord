// Module ID: 6425
// Function ID: 6426
// Name: isObject
// Dependencies: []

// Module 6425 (isObject)

export default function isObject(fn) {
  let tmp = fn;
  if (tmp) {
    tmp = typeof fn === "function" || typeof fn === "object";
  }
  return tmp;
};
