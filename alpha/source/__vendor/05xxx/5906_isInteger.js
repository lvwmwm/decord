// Module ID: 5906
// Function ID: 5907
// Name: isInteger
// Dependencies: [1339, 5898, 1332, 1333]

// Module 5906 (isInteger)
import _mod1332 from "module_1332" /* 1332 */;
import _mod1333 from "module_1333" /* 1333 */;
import _mod1339 from "module_1339" /* 1339 */;
import isFinite from "isFinite" /* 5898 */;


export default function isInteger(num) {
  if (typeof num === "number") {
    if (!_mod1339(num)) {
      if (isFinite(num)) {
        const tmp = _mod1332(num);
        return _mod1333(tmp) === tmp;
      }
    }
  }
  return false;
};
