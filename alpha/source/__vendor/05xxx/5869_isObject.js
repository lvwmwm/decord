// Module ID: 5869
// Function ID: 5870
// Name: isObject
// Dependencies: []

// Module 5869 (isObject)

export default function isObject(fn) {
  let tmp = fn;
  if (tmp) {
    tmp = typeof fn === "function" || typeof fn === "object";
  }
  return tmp;
};
