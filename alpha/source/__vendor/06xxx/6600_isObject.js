// Module ID: 6600
// Function ID: 6601
// Name: isObject
// Dependencies: []

// Module 6600 (isObject)

export default function isObject(fn) {
  let tmp = fn;
  if (tmp) {
    tmp = typeof fn === "function" || typeof fn === "object";
  }
  return tmp;
};
