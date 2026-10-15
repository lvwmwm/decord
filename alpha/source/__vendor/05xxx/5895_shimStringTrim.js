// Module ID: 5895
// Function ID: 5896
// Name: shimStringTrim
// Dependencies: [1476, 5888, 1477]

// Module 5895 (shimStringTrim)
import hasPropertyDescriptors from "hasPropertyDescriptors" /* 1476 */;
import getPolyfill from "getPolyfill" /* 5888 */;

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
