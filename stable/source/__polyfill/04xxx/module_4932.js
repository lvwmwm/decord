// Module ID: 4932
// Function ID: 4933
// Dependencies: []

// Module 4932

export default function isPropertyKey(str) {
  let tmp = typeof str === "string";
  if (typeof str !== "string") {
    tmp = typeof str === "symbol";
  }
  return tmp;
};
