// Module ID: 5100
// Function ID: 5101
// Name: isObject
// Dependencies: []

// Module 5100 (isObject)

export default function isObject(fn) {
  let tmp = fn;
  if (tmp) {
    tmp = typeof fn === "function" || typeof fn === "object";
  }
  return tmp;
};
