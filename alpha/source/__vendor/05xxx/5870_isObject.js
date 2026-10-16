// Module ID: 5870
// Function ID: 5871
// Name: isObject
// Dependencies: []

// Module 5870 (isObject)

export default function isObject(fn) {
  let tmp = fn;
  if (tmp) {
    tmp = typeof fn === "function" || typeof fn === "object";
  }
  return tmp;
};
