// Module ID: 6610
// Function ID: 6611
// Name: shimStringTrim
// Dependencies: [1472, 6603, 1473]

// Module 6610 (shimStringTrim)
import hasPropertyDescriptors from "hasPropertyDescriptors" /* 1472 */;
import getPolyfill from "getPolyfill" /* 6603 */;

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
