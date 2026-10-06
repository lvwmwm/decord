// Module ID: 5137
// Function ID: 5138
// Name: isInteger
// Dependencies: [1325, 5129, 1318, 1319]

// Module 5137 (isInteger)
import _mod1318 from "module_1318" /* 1318 */;
import _mod1319 from "module_1319" /* 1319 */;
import _mod1325 from "module_1325" /* 1325 */;
import isFinite from "isFinite" /* 5129 */;


export default function isInteger(num) {
  if (typeof num === "number") {
    if (!_mod1325(num)) {
      if (isFinite(num)) {
        const tmp = _mod1318(num);
        return _mod1319(tmp) === tmp;
      }
    }
  }
  return false;
};
