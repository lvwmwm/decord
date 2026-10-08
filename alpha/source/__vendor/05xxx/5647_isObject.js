// Module ID: 5647
// Function ID: 5648
// Name: isObject
// Dependencies: []

// Module 5647 (isObject)

export default function isObject(fn) {
  let tmp = fn;
  if (tmp) {
    tmp = typeof fn === "function" || typeof fn === "object";
  }
  return tmp;
};
