// Module ID: 1282
// Function ID: 1283
// Name: validate
// Dependencies: [1283]
// Exports: default

// Module 1282 (validate)
import _modDef1283 from "module_1283" /* 1283 */;


export default function validate(str) {
  let isMatch = typeof str === "string";
  if (typeof str === "string") {
    const obj = _modDef1283;
    isMatch = obj.test(str);
  }
  return isMatch;
};
