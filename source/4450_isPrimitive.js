// Module ID: 4450
// Function ID: 4451
// Name: isPrimitive
// Dependencies: []

// Module 4450 (isPrimitive)

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
