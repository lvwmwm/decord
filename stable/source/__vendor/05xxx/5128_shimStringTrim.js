// Module ID: 5128
// Function ID: 5129
// Name: shimStringTrim
// Dependencies: [1464, 5121, 1465]

// Module 5128 (shimStringTrim)
import hasPropertyDescriptors from "hasPropertyDescriptors" /* 1464 */;
import getPolyfill from "getPolyfill" /* 5121 */;

let tmp;
const defineDataProperty = tmp(1465);
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
