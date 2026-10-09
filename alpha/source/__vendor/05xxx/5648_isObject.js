// Module ID: 5648
// Function ID: 5649
// Name: isObject
// Dependencies: []

// Module 5648 (isObject)

export default function isObject(fn) {
  let tmp = fn;
  if (tmp) {
    tmp = typeof fn === "function" || typeof fn === "object";
  }
  return tmp;
};
