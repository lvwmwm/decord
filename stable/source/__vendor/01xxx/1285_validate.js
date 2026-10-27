// Module ID: 1285
// Function ID: 1286
// Name: validate
// Dependencies: [1286]
// Exports: default

// Module 1285 (validate)
import _modDef1286 from "module_1286" /* 1286 */;


export default function validate(str) {
  let isMatch = typeof str === "string";
  if (typeof str === "string") {
    const obj = _modDef1286;
    isMatch = obj.test(str);
  }
  return isMatch;
};
