// Module ID: 4777
// Function ID: 4778
// Name: isPropertyKey
// Dependencies: []

// Module 4777 (isPropertyKey)

export default function isPropertyKey(str) {
  let tmp = typeof str === "string";
  if (typeof str !== "string") {
    tmp = typeof str === "symbol";
  }
  return tmp;
};
