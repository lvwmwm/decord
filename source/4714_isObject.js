// Module ID: 4714
// Function ID: 4715
// Name: isObject
// Dependencies: []

// Module 4714 (isObject)

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
