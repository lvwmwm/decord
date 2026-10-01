// Module ID: 5123
// Function ID: 5124
// Name: defineProperties
// Dependencies: [1458, 1459, 5124]

// Module 5123 (defineProperties)
import hasPropertyDescriptors from "hasPropertyDescriptors" /* 1458 */;
import defineDataProperty from "defineDataProperty" /* 1459 */;
import keys2 from "keys2" /* 5124 */;

let tmp = typeof Symbol === "function";
if (typeof Symbol === "function") {
  const _Symbol = Symbol;
  tmp = typeof Symbol("foo") === "symbol";
}
let closure_2 = tmp;
let tmp2 = hasPropertyDescriptors();
let closure_5 = tmp2;
function defineProperty(arg0, arg1, arg2, arg3) {

}
function defineProperties(prototype, ownPropertyDescriptors) {
  const tmp2 = keys2(ownPropertyDescriptors);
  let callResult = tmp2;
  if (closure_2) {
    const _Object = Object;
    callResult = concat.call(tmp2, Object.getOwnPropertySymbols(ownPropertyDescriptors));
  }
  let num = 0;
  if (0 < callResult.length) {
    while (typeof defineProperty === "function") {
      if (!(tmp6 in prototype)) {
        let tmp13 = defineDataProperty;
        if (closure_5) {
          let flag = true;
          let tmp13Result = tmp13(prototype, tmp6, tmp7, true);
        } else {
          let tmp13Result2 = tmp13(prototype, tmp6, tmp7);
        }
      }
      num = num + 1;
    }
    throw new TypeError("Trying to call a non-function");
  }
}
defineProperties.supportsDescriptors = tmp2;

export default defineProperties;
