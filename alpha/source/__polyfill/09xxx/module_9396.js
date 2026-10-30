// Module ID: 9396
// Function ID: 9397
// Dependencies: [9397, 9404, 9405, 9406, 9407, 9408, 9409, 9393]

// Module 9396
import _mod9397 from "module_9397" /* 9397 */;
import _mod9404 from "module_9404" /* 9404 */;
import _mod9405 from "module_9405" /* 9405 */;
import filter from "filter" /* 9406 */;
import testElement from "testElement" /* 9407 */;
import DocumentPosition from "DocumentPosition" /* 9408 */;
import _mod9409 from "module_9409" /* 9409 */;

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
tmp3(_mod9397, exports);
tmp3(_mod9404, exports);
tmp3(_mod9405, exports);
tmp3(filter, exports);
tmp3(testElement, exports);
tmp3(DocumentPosition, exports);
tmp3(_mod9409, exports);

export const isTag = require("DomHandler").isTag;
export const isCDATA = require("DomHandler").isCDATA;
export const isText = require("DomHandler").isText;
export const isComment = require("DomHandler").isComment;
export const isDocument = require("DomHandler").isDocument;
export const hasChildren = require("DomHandler").hasChildren;
