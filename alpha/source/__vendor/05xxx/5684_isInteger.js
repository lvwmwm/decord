// Module ID: 5684
// Function ID: 5685
// Name: isInteger
// Dependencies: [1336, 5676, 1329, 1330]

// Module 5684 (isInteger)
import _mod1329 from "module_1329" /* 1329 */;
import _mod1330 from "module_1330" /* 1330 */;
import _mod1336 from "module_1336" /* 1336 */;
import isFinite from "isFinite" /* 5676 */;


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
