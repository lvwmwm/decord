// Module ID: 5675
// Function ID: 5676
// Name: shimStringTrim
// Dependencies: [1475, 5668, 1476]

// Module 5675 (shimStringTrim)
import hasPropertyDescriptors from "hasPropertyDescriptors" /* 1475 */;
import getPolyfill from "getPolyfill" /* 5668 */;

let tmp;
const defineDataProperty = tmp(1476);
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
