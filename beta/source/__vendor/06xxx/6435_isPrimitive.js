// Module ID: 6435
// Function ID: 6436
// Name: isPrimitive
// Dependencies: []

// Module 6435 (isPrimitive)

export default function isPrimitive(fn) {
  let tmp = null === fn;
  if (!tmp) {
    let tmp2 = typeof fn !== "function";
    if (typeof fn !== "function") {
      tmp2 = typeof fn !== "object";
    }
    tmp = tmp2;
  }
  return tmp;
};
