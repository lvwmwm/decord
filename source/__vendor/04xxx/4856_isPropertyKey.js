// Module ID: 4856
// Function ID: 4857
// Name: isPropertyKey
// Dependencies: []

// Module 4856 (isPropertyKey)

export default function isPropertyKey(str) {
  let tmp = typeof str === "string";
  if (typeof str !== "string") {
    tmp = typeof str === "symbol";
  }
  return tmp;
};
