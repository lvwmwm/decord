// Module ID: 4756
// Function ID: 4757
// Name: shimStringTrim
// Dependencies: [1424, 4749, 1425]

// Module 4756 (shimStringTrim)
import hasPropertyDescriptors from "hasPropertyDescriptors" /* 1424 */;
import defineDataProperty from "defineDataProperty" /* 1425 */;
import getPolyfill from "getPolyfill" /* 4749 */;

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
