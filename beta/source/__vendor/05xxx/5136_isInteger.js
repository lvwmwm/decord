// Module ID: 5136
// Function ID: 5137
// Name: isInteger
// Dependencies: [1313, 5128, 1306, 1307]

// Module 5136 (isInteger)
import _mod1306 from "module_1306" /* 1306 */;
import _mod1307 from "module_1307" /* 1307 */;
import _mod1313 from "module_1313" /* 1313 */;
import isFinite from "isFinite" /* 5128 */;


export default function isInteger(num) {
  if (typeof num === "number") {
    if (!_mod1313(num)) {
      if (isFinite(num)) {
        const tmp = _mod1306(num);
        return _mod1307(tmp) === tmp;
      }
    }
  }
  return false;
};
