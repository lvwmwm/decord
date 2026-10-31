// Module ID: 9416
// Function ID: 9417
// Dependencies: [9417, 9424, 9425, 9426, 9427, 9428, 9429, 9413]

// Module 9416
import _mod9417 from "module_9417" /* 9417 */;
import _mod9424 from "module_9424" /* 9424 */;
import _mod9425 from "module_9425" /* 9425 */;
import filter from "filter" /* 9426 */;
import testElement from "testElement" /* 9427 */;
import DocumentPosition from "DocumentPosition" /* 9428 */;
import _mod9429 from "module_9429" /* 9429 */;

const require = globalThis.__r;
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
    let closure_0 = __esModule;
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
let closure_2 = tmp;
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
      let tmp3 = closure_2(arg1, obj, key10007);
      continue;
    }
    continue;
  }
});
tmp3(_mod9417, exports);
tmp3(_mod9424, exports);
tmp3(_mod9425, exports);
tmp3(filter, exports);
tmp3(testElement, exports);
tmp3(DocumentPosition, exports);
tmp3(_mod9429, exports);

export const isTag = require("DomHandler").isTag;
export const isCDATA = require("DomHandler").isCDATA;
export const isText = require("DomHandler").isText;
export const isComment = require("DomHandler").isComment;
export const isDocument = require("DomHandler").isDocument;
export const hasChildren = require("DomHandler").hasChildren;
