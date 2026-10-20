// Module ID: 6347
// Function ID: 6348
// Name: isObject
// Dependencies: []

// Module 6347 (isObject)

export default function isObject(fn) {
  let tmp = fn;
  if (tmp) {
    tmp = typeof fn === "function" || typeof fn === "object";
  }
  return tmp;
};
