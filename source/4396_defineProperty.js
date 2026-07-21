// Module ID: 4396
// Function ID: 38804
// Name: defineProperty
// Dependencies: []

// Module 4396 (defineProperty)
let tmp = "function" === typeof Symbol;
if (tmp) {
  const _Symbol = Symbol;
  tmp = "symbol" === typeof Symbol("foo");
}
const tmp2 = require(dependencyMap[0])();
function defineProperty(arg0, arg1, arg2, arg3) {
  if (arg1 in arg0) {
    if (true !== arg3) {
      let tmp = "function" === typeof arg3;
      if (tmp) {
        tmp = "[object Function]" === toString.call(arg3);
        const tmp2 = toString;
      }
    }
  }
  const tmp3 = require(dependencyMap[1]);
  if (tmp2) {
    tmp3(arg0, arg1, arg2, true);
  } else {
    tmp3(arg0, arg1, arg2);
  }
}
function defineProperties(arg0, arg1) {
  let length;
  const tmp = arguments.length > 2 ? arguments[2] : {};
  const tmp2 = require(dependencyMap[2])(arg1);
  let callResult = tmp2;
  if (tmp) {
    const _Object = Object;
    callResult = concat.call(tmp2, Object.getOwnPropertySymbols(arg1));
  }
  let num = 0;
  if (0 < callResult.length) {
    do {
      let tmp5 = closure_6;
      let tmp6 = arg0;
      let tmp7 = closure_6(arg0, callResult[num], arg1[callResult[num]], tmp[callResult[num]]);
      num = num + 1;
      length = callResult.length;
    } while (num < length);
  }
}
defineProperties.supportsDescriptors = tmp2;

export default defineProperties;
