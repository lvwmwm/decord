// Module ID: 5146
// Function ID: 5147
// Dependencies: []

// Module 5146

export default function isPropertyKey(str) {
  let tmp = typeof str === "string";
  if (typeof str !== "string") {
    tmp = typeof str === "symbol";
  }
  return tmp;
};
