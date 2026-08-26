// Module ID: 4761
// Function ID: 4762
// Name: isPropertyKey
// Dependencies: []

// Module 4761 (isPropertyKey)

export default function isPropertyKey(str) {
  let tmp = typeof str === "string";
  if (typeof str !== "string") {
    tmp = typeof str === "symbol";
  }
  return tmp;
};
