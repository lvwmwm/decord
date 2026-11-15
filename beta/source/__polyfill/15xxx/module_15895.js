// Module ID: 15895
// Function ID: 15896
// Dependencies: [15896, 15900, 15901, 15899, 15902, 15898]

// Module 15895
import defaultErrorMap from "defaultErrorMap" /* 15896 */;
import _mod15898 from "module_15898" /* 15898 */;
import _mod15899 from "module_15899" /* 15899 */;
import DIRTY from "DIRTY" /* 15900 */;
import _mod15901 from "module_15901" /* 15901 */;
import _mod15902 from "module_15902" /* 15902 */;

let hasOwnProperty;

const self = this;
let tmp = this && self.__createBinding;
if (!tmp) {
  let tmp2 = globalThis;
  let _Object = Object;
  tmp = Object.create ? ((arg0, __esModule, arg2, arg3) => {
    function get() {
      return __esModule[closure_1];
    }
    closure_0 = __esModule;
    let closure_1 = arg2;
    let tmp = arg3;
    if (undefined === arg3) {
      tmp = arg2;
    }
    let ownPropertyDescriptor = Object.getOwnPropertyDescriptor(__esModule, arg2);
    let tmp3 = ownPropertyDescriptor;
    if (tmp3) {
      let tmp4;
      if ("get" in ownPropertyDescriptor) {
        tmp4 = !__esModule.__esModule;
      } else {
        tmp4 = ownPropertyDescriptor.writable || ownPropertyDescriptor.configurable;
      }
      tmp3 = !tmp4;
    }
    if (!tmp3) {
      ownPropertyDescriptor = { enumerable: true, get };
      const obj = { enumerable: true, get };
    }
    Object.defineProperty(arg0, tmp, ownPropertyDescriptor);
  }) : ((arg0, arg1, arg2, arg3) => {
    let tmp = arg3;
    if (undefined === arg3) {
      tmp = arg2;
    }
    arg0[tmp] = arg1[arg2];
  });
}
let closure_0 = tmp;
let tmp3 = self && self.__exportStar || ((obj, arg1) => {
  for (const key10007 in obj) {
    let callResult = "default" === key10007;
    if (!callResult) {
      let _Object = Object;
      hasOwnProperty = Object.prototype.hasOwnProperty;
      callResult = hasOwnProperty.call(arg1, key10007);
    }
    if (callResult) {
      continue;
    } else {
      let tmp3 = closure_0(arg1, obj, key10007);
      continue;
    }
    continue;
  }
});
tmp3(defaultErrorMap, exports);
tmp3(DIRTY, exports);
tmp3(_mod15901, exports);
tmp3(_mod15899, exports);
tmp3(_mod15902, exports);
tmp3(_mod15898, exports);
