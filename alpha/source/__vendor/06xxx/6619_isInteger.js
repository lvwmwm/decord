// Module ID: 6619
// Function ID: 6620
// Name: isInteger
// Dependencies: [1324, 6611, 1317, 1318]

// Module 6619 (isInteger)
import _mod1317 from "module_1317" /* 1317 */;
import _mod1318 from "module_1318" /* 1318 */;
import _mod1324 from "module_1324" /* 1324 */;
import isFinite from "isFinite" /* 6611 */;


export default function isInteger(num) {
  if (typeof num === "number") {
    if (!_mod1324(num)) {
      if (isFinite(num)) {
        const tmp = _mod1317(num);
        return _mod1318(tmp) === tmp;
      }
    }
  }
  return false;
};
