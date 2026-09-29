// Module ID: 5064
// Function ID: 5065
// Name: shimStringTrim
// Dependencies: [1457, 5057, 1458]

// Module 5064 (shimStringTrim)
import _mod1457 from "module_1457" /* 1457 */;
import defineDataProperty from "defineDataProperty" /* 1458 */;
import _mod5057 from "module_5057" /* 5057 */;

let closure_2 = _mod1457();

export default function shimStringTrim() {
  const tmp3 = _mod5057();
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
