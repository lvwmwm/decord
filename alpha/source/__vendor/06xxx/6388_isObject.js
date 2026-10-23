// Module ID: 6388
// Function ID: 6389
// Name: isObject
// Dependencies: []

// Module 6388 (isObject)

export default function isObject(fn) {
  let tmp = fn;
  if (tmp) {
    tmp = typeof fn === "function" || typeof fn === "object";
  }
  return tmp;
};
