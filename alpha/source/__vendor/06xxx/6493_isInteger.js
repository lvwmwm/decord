// Module ID: 6493
// Function ID: 6494
// Name: isInteger
// Dependencies: [1325, 6485, 1318, 1319]

// Module 6493 (isInteger)
import _mod1318 from "module_1318" /* 1318 */;
import _mod1319 from "module_1319" /* 1319 */;
import _mod1325 from "module_1325" /* 1325 */;
import isFinite from "isFinite" /* 6485 */;


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
