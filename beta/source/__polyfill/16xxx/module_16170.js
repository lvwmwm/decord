// Module ID: 16170
// Function ID: 16171
// Dependencies: [16171, 16175, 16176, 16174, 16177, 16173]

// Module 16170
import defaultErrorMap from "defaultErrorMap" /* 16171 */;
import _mod16173 from "module_16173" /* 16173 */;
import _mod16174 from "module_16174" /* 16174 */;
import DIRTY from "DIRTY" /* 16175 */;
import _mod16176 from "module_16176" /* 16176 */;
import _mod16177 from "module_16177" /* 16177 */;

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
tmp3(_mod16176, exports);
tmp3(_mod16174, exports);
tmp3(_mod16177, exports);
tmp3(_mod16173, exports);
