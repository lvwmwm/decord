// Module ID: 4798
// Function ID: 4799
// Name: shimStringTrim
// Dependencies: [1420, 4791, 1421]

// Module 4798 (shimStringTrim)
import hasPropertyDescriptors from "hasPropertyDescriptors" /* 1420 */;
import defineDataProperty from "defineDataProperty" /* 1421 */;
import getPolyfill from "getPolyfill" /* 4791 */;

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
