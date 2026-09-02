// Module ID: 603
// Function ID: 604
// Name: isObject
// Dependencies: []

// Module 603 (isObject)

export default function isObject(obj) {
  let tmp = null != obj;
  if (tmp) {
    let tmp2 = typeof obj === "object";
    if (typeof obj !== "object") {
      tmp2 = typeof obj === "function";
    }
    tmp = tmp2;
  }
  return tmp;
};
