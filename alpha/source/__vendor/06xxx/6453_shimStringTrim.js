// Module ID: 6453
// Function ID: 6454
// Name: shimStringTrim
// Dependencies: [1475, 6446, 1476]

// Module 6453 (shimStringTrim)
import hasPropertyDescriptors from "hasPropertyDescriptors" /* 1475 */;
import getPolyfill from "getPolyfill" /* 6446 */;

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
