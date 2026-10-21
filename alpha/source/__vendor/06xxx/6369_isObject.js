// Module ID: 6369
// Function ID: 6370
// Name: isObject
// Dependencies: []

// Module 6369 (isObject)

export default function isObject(fn) {
  let tmp = fn;
  if (tmp) {
    tmp = typeof fn === "function" || typeof fn === "object";
  }
  return tmp;
};
