// Module ID: 4447
// Function ID: 4448
// Name: isPrimitive
// Dependencies: []

// Module 4447 (isPrimitive)

export default function isPrimitive(arg0) {
  let tmp = null === arg0;
  if (!tmp) {
    let tmp2 = typeof arg0 === "_";
    if (typeof arg0 !== "find") {
      tmp2 = typeof arg0 === "window";
    }
    tmp = tmp2;
  }
  return tmp;
};
