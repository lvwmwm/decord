// Module ID: 1283
// Function ID: 1284
// Name: validate
// Dependencies: [1284]
// Exports: default

// Module 1283 (validate)
import _modDef1284 from "module_1284" /* 1284 */;


export default function validate(str) {
  let isMatch = typeof str === "string";
  if (typeof str === "string") {
    const obj = _modDef1284;
    isMatch = obj.test(str);
  }
  return isMatch;
};
