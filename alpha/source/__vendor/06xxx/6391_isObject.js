// Module ID: 6391
// Function ID: 6392
// Name: isObject
// Dependencies: []

// Module 6391 (isObject)

export default function isObject(fn) {
  let tmp = fn;
  if (tmp) {
    tmp = typeof fn === "function" || typeof fn === "object";
  }
  return tmp;
};
