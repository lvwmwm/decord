// Module ID: 5897
// Function ID: 5898
// Name: shimStringTrim
// Dependencies: [1478, 5890, 1479]

// Module 5897 (shimStringTrim)
import hasPropertyDescriptors from "hasPropertyDescriptors" /* 1478 */;
import getPolyfill from "getPolyfill" /* 5890 */;

let tmp;
const defineDataProperty = tmp(1479);
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
