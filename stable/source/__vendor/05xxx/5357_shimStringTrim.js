// Module ID: 5357
// Function ID: 5358
// Name: shimStringTrim
// Dependencies: [1463, 5350, 1464]

// Module 5357 (shimStringTrim)
import hasPropertyDescriptors from "hasPropertyDescriptors" /* 1463 */;
import getPolyfill from "getPolyfill" /* 5350 */;

let tmp;
const defineDataProperty = tmp(1464);
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
