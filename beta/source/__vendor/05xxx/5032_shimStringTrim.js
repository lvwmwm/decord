// Module ID: 5032
// Function ID: 5033
// Name: shimStringTrim
// Dependencies: [1457, 5025, 1458]

// Module 5032 (shimStringTrim)
import _mod1457 from "module_1457" /* 1457 */;
import defineDataProperty from "defineDataProperty" /* 1458 */;
import _mod5025 from "module_5025" /* 5025 */;

let closure_2 = _mod1457();

export default function shimStringTrim() {
  const tmp3 = _mod5025();
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
