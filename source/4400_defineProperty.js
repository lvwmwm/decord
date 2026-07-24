// Module ID: 4400
// Function ID: 38853
// Name: defineProperty
// Dependencies: [1381, 1382, 4401]

// Module 4400 (defineProperty)
let tmp = "function" === typeof Symbol;
if (tmp) {
  const _Symbol = Symbol;
  tmp = "symbol" === typeof Symbol("foo");
}
let closure_2 = tmp;
let tmp2 = require("hasPropertyDescriptors")();
let closure_5 = tmp2;
function defineProperty(arg0, arg1, arg2, arg3) {
  if (arg1 in arg0) {
    if (true !== arg3) {
      let tmp = "function" === typeof arg3;
      if (tmp) {
        tmp = "[object Function]" === toString.call(arg3);
      }
    }
  }
  const tmp3 = require(1382) /* defineDataProperty */;
  if (closure_5) {
    tmp3(arg0, arg1, arg2, true);
  } else {
    tmp3(arg0, arg1, arg2);
  }
}
function defineProperties(arg0, arg1) {
  let length;
  const tmp2 = require(4401) /* keys */(arg1);
  let callResult = tmp2;
  if (closure_2) {
    const _Object = Object;
    callResult = concat.call(tmp2, Object.getOwnPropertySymbols(arg1));
  }
  let num = 0;
  if (0 < callResult.length) {
    do {
      let tmp5 = defineProperty;
      let tmp6 = arg0;
      let tmp7 = defineProperty(arg0, callResult[num], arg1[callResult[num]], tmp[callResult[num]]);
      num = num + 1;
      length = callResult.length;
    } while (num < length);
  }
}
defineProperties.supportsDescriptors = tmp2;

export default defineProperties;
