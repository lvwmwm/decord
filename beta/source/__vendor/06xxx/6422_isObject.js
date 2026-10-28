// Module ID: 6422
// Function ID: 6423
// Name: isObject
// Dependencies: []

// Module 6422 (isObject)

export default function isObject(fn) {
  let tmp = fn;
  if (tmp) {
    tmp = typeof fn === "function" || typeof fn === "object";
  }
  return tmp;
};
