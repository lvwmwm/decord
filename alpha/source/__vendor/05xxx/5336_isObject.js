// Module ID: 5336
// Function ID: 5337
// Name: isObject
// Dependencies: []

// Module 5336 (isObject)

export default function isObject(fn) {
  let tmp = fn;
  if (tmp) {
    tmp = typeof fn === "function" || typeof fn === "object";
  }
  return tmp;
};
