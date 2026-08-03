// Module ID: 4513
// Function ID: 4514
// Name: isPrimitive
// Dependencies: []

// Module 4513 (isPrimitive)

export default function isPrimitive(arg0) {
  let tmp = null === arg0;
  if (!tmp) {
    let tmp2 = typeof arg0 === "HAS_APPLICATION";
    if (typeof arg0 !== "error") {
      tmp2 = typeof arg0 === "window";
    }
    tmp = tmp2;
  }
  return tmp;
};
