// Module ID: 1263
// Function ID: 1264
// Name: validate
// Dependencies: [1264]
// Exports: default

// Module 1263 (validate)
import _modDef1264 from "module_1264" /* 1264 */;

importDefault = arg2;
const dependencyMap = arg6;

export default function validate(str) {
  let isMatch = typeof str === "string";
  if (typeof str === "string") {
    isMatch = _modDef1264.test(str);
  }
  return isMatch;
};
