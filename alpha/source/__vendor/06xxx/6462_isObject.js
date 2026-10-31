// Module ID: 6462
// Function ID: 6463
// Name: isObject
// Dependencies: []

// Module 6462 (isObject)

export default function isObject(fn) {
  let tmp = fn;
  if (tmp) {
    tmp = typeof fn === "function" || typeof fn === "object";
  }
  return tmp;
};
