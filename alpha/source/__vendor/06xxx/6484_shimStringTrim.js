// Module ID: 6484
// Function ID: 6485
// Name: shimStringTrim
// Dependencies: [1471, 6477, 1472]

// Module 6484 (shimStringTrim)
import hasPropertyDescriptors from "hasPropertyDescriptors" /* 1471 */;
import getPolyfill from "getPolyfill" /* 6477 */;

let tmp;
const defineDataProperty = tmp(1472);
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
