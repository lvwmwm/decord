// Module ID: 1272
// Function ID: 1273
// Name: validate
// Dependencies: [1273]
// Exports: default

// Module 1272 (validate)
import _modDef1273 from "module_1273" /* 1273 */;


export default function validate(str) {
  let isMatch = typeof str === "string";
  if (typeof str === "string") {
    const obj = _modDef1273;
    isMatch = obj.test(str);
  }
  return isMatch;
};
