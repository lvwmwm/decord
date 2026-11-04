// Module ID: 6597
// Function ID: 6598
// Name: isObject
// Dependencies: []

// Module 6597 (isObject)

export default function isObject(fn) {
  let tmp = fn;
  if (tmp) {
    tmp = typeof fn === "function" || typeof fn === "object";
  }
  return tmp;
};
