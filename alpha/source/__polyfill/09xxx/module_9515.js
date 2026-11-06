// Module ID: 9515
// Function ID: 9516
// Dependencies: [9516, 9523, 9524, 9525, 9526, 9527, 9528, 9512]

// Module 9515
import _mod9516 from "module_9516" /* 9516 */;
import _mod9523 from "module_9523" /* 9523 */;
import _mod9524 from "module_9524" /* 9524 */;
import _mod9525 from "module_9525" /* 9525 */;
import testElement from "testElement" /* 9526 */;
import DocumentPosition from "DocumentPosition" /* 9527 */;
import _mod9528 from "module_9528" /* 9528 */;

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
tmp3(_mod9516, exports);
tmp3(_mod9523, exports);
tmp3(_mod9524, exports);
tmp3(_mod9525, exports);
tmp3(testElement, exports);
tmp3(DocumentPosition, exports);
tmp3(_mod9528, exports);

export const isTag = require("DomHandler").isTag;
export const isCDATA = require("DomHandler").isCDATA;
export const isText = require("DomHandler").isText;
export const isComment = require("DomHandler").isComment;
export const isDocument = require("DomHandler").isDocument;
export const hasChildren = require("DomHandler").hasChildren;
