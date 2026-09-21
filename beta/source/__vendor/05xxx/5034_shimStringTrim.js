// Module ID: 5034
// Function ID: 5035
// Name: shimStringTrim
// Dependencies: [1461, 5027, 1462]

// Module 5034 (shimStringTrim)
import _mod1461 from "module_1461" /* 1461 */;
import defineDataProperty from "defineDataProperty" /* 1462 */;
import _mod5027 from "module_5027" /* 5027 */;

let closure_2 = _mod1461();

export default function shimStringTrim() {
  const tmp3 = _mod5027();
  if (String.prototype.trim !== tmp3) {
    const tmpResult = defineDataProperty;
    const _String = String;
    if (closure_2) {
      tmpResult(prototype, "trim", tmp3, true);
    } else {
      tmpResult(prototype, "trim", tmp3);
    }
  }
  return tmp3;
};
