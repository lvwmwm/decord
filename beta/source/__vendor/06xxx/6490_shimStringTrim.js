// Module ID: 6490
// Function ID: 6491
// Name: shimStringTrim
// Dependencies: [1470, 6483, 1471]

// Module 6490 (shimStringTrim)
import hasPropertyDescriptors from "hasPropertyDescriptors" /* 1470 */;
import getPolyfill from "getPolyfill" /* 6483 */;

let tmp;
const defineDataProperty = tmp(1471);
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
