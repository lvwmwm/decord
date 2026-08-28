// Module ID: 4775
// Function ID: 4776
// Name: isPropertyKey
// Dependencies: []

// Module 4775 (isPropertyKey)

export default function isPropertyKey(str) {
  let tmp = typeof str === "string";
  if (typeof str !== "string") {
    tmp = typeof str === "symbol";
  }
  return tmp;
};
