// Module ID: 4546
// Function ID: 4547
// Name: isObject
// Dependencies: []

// Module 4546 (isObject)

export default function isObject(fn) {
  let tmp = fn;
  if (tmp) {
    let tmp2 = typeof fn === "function";
    if (typeof fn !== "function") {
      tmp2 = typeof fn === "object";
    }
    tmp = tmp2;
  }
  return tmp;
};
