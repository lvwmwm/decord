// Module ID: 5688
// Function ID: 5689
// Name: isInteger
// Dependencies: [1337, 5680, 1330, 1331]

// Module 5688 (isInteger)
import _mod1330 from "module_1330" /* 1330 */;
import _mod1331 from "module_1331" /* 1331 */;
import _mod1337 from "module_1337" /* 1337 */;
import isFinite from "isFinite" /* 5680 */;


export default function isInteger(num) {
  if (typeof num === "number") {
    if (!_mod1337(num)) {
      if (isFinite(num)) {
        const tmp = _mod1330(num);
        return _mod1331(tmp) === tmp;
      }
    }
  }
  return false;
};
