// Module ID: 4837
// Function ID: 4838
// Name: shimStringTrim
// Dependencies: [1456, 4830, 1457]

// Module 4837 (shimStringTrim)
import hasPropertyDescriptors from "hasPropertyDescriptors" /* 1456 */;
import defineDataProperty from "defineDataProperty" /* 1457 */;
import getPolyfill from "getPolyfill" /* 4830 */;

let closure_2 = hasPropertyDescriptors();

export default function shimStringTrim() {
  const tmp3 = getPolyfill();
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
