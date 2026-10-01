// Module ID: 5127
// Function ID: 5128
// Name: shimStringTrim
// Dependencies: [1458, 5120, 1459]

// Module 5127 (shimStringTrim)
import hasPropertyDescriptors from "hasPropertyDescriptors" /* 1458 */;
import getPolyfill from "getPolyfill" /* 5120 */;

let tmp;
const defineDataProperty = tmp(1459);
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
