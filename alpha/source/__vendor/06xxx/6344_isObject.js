// Module ID: 6344
// Function ID: 6345
// Name: isObject
// Dependencies: []

// Module 6344 (isObject)

export default function isObject(fn) {
  let tmp = fn;
  if (tmp) {
    tmp = typeof fn === "function" || typeof fn === "object";
  }
  return tmp;
};
