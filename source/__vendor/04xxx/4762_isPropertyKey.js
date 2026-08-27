// Module ID: 4762
// Function ID: 4763
// Name: isPropertyKey
// Dependencies: []

// Module 4762 (isPropertyKey)

export default function isPropertyKey(str) {
  let tmp = typeof str === "string";
  if (typeof str !== "string") {
    tmp = typeof str === "symbol";
  }
  return tmp;
};
