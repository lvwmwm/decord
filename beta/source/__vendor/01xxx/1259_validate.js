// Module ID: 1259
// Function ID: 1260
// Name: validate
// Dependencies: [1260]
// Exports: default

// Module 1259 (validate)
import _modDef1260 from "module_1260" /* 1260 */;


export default function validate(str) {
  let isMatch = typeof str === "string";
  if (typeof str === "string") {
    const obj = _modDef1260;
    isMatch = obj.test(str);
  }
  return isMatch;
};
