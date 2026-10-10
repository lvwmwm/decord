// Module ID: 5651
// Function ID: 5652
// Name: isObject
// Dependencies: []

// Module 5651 (isObject)

export default function isObject(fn) {
  let tmp = fn;
  if (tmp) {
    tmp = typeof fn === "function" || typeof fn === "object";
  }
  return tmp;
};
