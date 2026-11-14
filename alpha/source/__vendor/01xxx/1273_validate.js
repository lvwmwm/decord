// Module ID: 1273
// Function ID: 1274
// Name: validate
// Dependencies: [1274]
// Exports: default

// Module 1273 (validate)
import _modDef1274 from "module_1274" /* 1274 */;


export default function validate(str) {
  let isMatch = typeof str === "string";
  if (typeof str === "string") {
    const obj = _modDef1274;
    isMatch = obj.test(str);
  }
  return isMatch;
};
