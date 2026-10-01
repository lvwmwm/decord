// Module ID: 603
// Function ID: 604
// Name: baseIsNative
// Dependencies: [521, 604, 520, 606]

// Module 603 (baseIsNative)
import isFunction from "isFunction" /* 520 */;
import isObject from "isObject" /* 521 */;

const re2 = /^\[object .+?Constructor\]$/;
const _RegExp = RegExp;
const str = toString.call(Object.prototype.hasOwnProperty);
const str2 = str.replace(/[\\^$.*+?()[\]{}|]/g, "\\$&");
let closure_3 = _RegExp(`^${str2.replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?")}$`);

export default function baseIsNative(arg0) {
  const tmp3 = isObject(arg0);
  let tmp4 = !tmp3;
  if (tmp3) {
    tmp4 = tmp(604)(arg0);
  }
  let isMatch = !tmp4;
  if (isMatch) {
    const obj = isFunction(arg0) ? closure_3 : re2;
    isMatch = obj.test(tmp(606)(arg0));
  }
  return isMatch;
};
