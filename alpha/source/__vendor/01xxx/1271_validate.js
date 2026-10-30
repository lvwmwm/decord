// Module ID: 1271
// Function ID: 1272
// Name: validate
// Dependencies: [1272]
// Exports: default

// Module 1271 (validate)
import _modDef1272 from "module_1272" /* 1272 */;


export default function validate(str) {
  let isMatch = typeof str === "string";
  if (typeof str === "string") {
    const obj = _modDef1272;
    isMatch = obj.test(str);
  }
  return isMatch;
};
