// Module ID: 6456
// Function ID: 6457
// Name: isObject
// Dependencies: []

// Module 6456 (isObject)

export default function isObject(fn) {
  let tmp = fn;
  if (tmp) {
    tmp = typeof fn === "function" || typeof fn === "object";
  }
  return tmp;
};
