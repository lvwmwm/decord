// Module ID: 5907
// Function ID: 5908
// Name: isObject
// Dependencies: []

// Module 5907 (isObject)

export default function isObject(fn) {
  let tmp = fn;
  if (tmp) {
    tmp = typeof fn === "function" || typeof fn === "object";
  }
  return tmp;
};
