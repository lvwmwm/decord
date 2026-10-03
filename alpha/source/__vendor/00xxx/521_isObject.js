// Module ID: 521
// Function ID: 522
// Name: isObject
// Dependencies: []

// Module 521 (isObject)

export default function isObject(obj) {
  let tmp = null != obj;
  if (tmp) {
    tmp = typeof obj === "object" || typeof obj === "function";
  }
  return tmp;
};
