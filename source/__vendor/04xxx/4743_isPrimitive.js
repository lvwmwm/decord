// Module ID: 4743
// Function ID: 4744
// Name: isPrimitive
// Dependencies: []

// Module 4743 (isPrimitive)

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
