// Module ID: 6486
// Function ID: 6487
// Name: isInteger
// Dependencies: [1336, 6478, 1329, 1330]

// Module 6486 (isInteger)
import _mod1329 from "module_1329" /* 1329 */;
import _mod1330 from "module_1330" /* 1330 */;
import _mod1336 from "module_1336" /* 1336 */;
import isFinite from "isFinite" /* 6478 */;


export default function isInteger(num) {
  if (typeof num === "number") {
    if (!_mod1336(num)) {
      if (isFinite(num)) {
        const tmp = _mod1329(num);
        return _mod1330(tmp) === tmp;
      }
    }
  }
  return false;
};
