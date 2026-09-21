// Module ID: 1259
// Function ID: 1260
// Name: validate
// Dependencies: [1260]
// Exports: default

// Module 1259 (validate)
import _modDef1260 from "module_1260" /* 1260 */;

importDefault = arg2;
const dependencyMap = arg6;

export default function validate(str) {
  let isMatch = typeof str === "string";
  if (typeof str === "string") {
    isMatch = _modDef1260.test(str);
  }
  return isMatch;
};
