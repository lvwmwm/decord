// Module ID: 6477
// Function ID: 6478
// Name: shimStringTrim
// Dependencies: [1476, 6470, 1477]

// Module 6477 (shimStringTrim)
import hasPropertyDescriptors from "hasPropertyDescriptors" /* 1476 */;
import getPolyfill from "getPolyfill" /* 6470 */;

let tmp;
const defineDataProperty = tmp(1477);
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
