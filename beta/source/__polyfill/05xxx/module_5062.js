// Module ID: 5062
// Function ID: 5063
// Dependencies: [1461, 1462, 5063]

// Module 5062
import _mod1461 from "module_1461" /* 1461 */;
import defineDataProperty from "defineDataProperty" /* 1462 */;
import keys2 from "keys2" /* 5063 */;

let tmp = typeof Symbol === "function";
if (typeof Symbol === "function") {
  const _Symbol = Symbol;
  tmp = typeof Symbol("foo") === "symbol";
}
let closure_2 = tmp;
let tmp2 = _mod1461();
let closure_5 = tmp2;
function defineProperty(arg0, arg1, arg2, arg3) {

}
function defineProperties(prototype, ownPropertyDescriptors) {
  const arr = keys2(ownPropertyDescriptors);
  if (!closure_2) {
    let num = 0;
    if (0 < arr.length) {
      while (typeof defineProperty === "function") {
        if (!(tmp7 in prototype)) {
          let tmp14 = defineDataProperty;
          if (closure_5) {
            let flag2 = true;
            let tmp14Result = tmp14(prototype, tmp7, tmp8, true);
          } else {
            let tmp14Result2 = tmp14(prototype, tmp7, tmp8);
          }
        } else if (true !== tmp9) {
          if (typeof tmp9 === "function") {
            let call2 = toString.call;
          }
        }
        num = num + 1;
      }
      throw new TypeError("Trying to call a non-function");
    }
  } else {
    const call = concat.call;
    const _Object = Object;
    const ownPropertySymbols = Object.getOwnPropertySymbols(ownPropertyDescriptors);
    typeof call === "unknown" ? concat(ownPropertySymbols) : call(arr, ownPropertySymbols);
  }
}
defineProperties.supportsDescriptors = tmp2;

export default defineProperties;
