// Module ID: 6628
// Function ID: 6629
// Name: shimStringTrim
// Dependencies: [1472, 6621, 1473]

// Module 6628 (shimStringTrim)
import hasPropertyDescriptors from "hasPropertyDescriptors" /* 1472 */;
import getPolyfill from "getPolyfill" /* 6621 */;

let tmp;
const defineDataProperty = tmp(1473);
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
