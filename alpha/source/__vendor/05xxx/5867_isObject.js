// Module ID: 5867
// Function ID: 5868
// Name: isObject
// Dependencies: []

// Module 5867 (isObject)

export default function isObject(fn) {
  let tmp = fn;
  if (tmp) {
    tmp = typeof fn === "function" || typeof fn === "object";
  }
  return tmp;
};
