// Module ID: 614
// Function ID: 615
// Name: baseIsNative
// Dependencies: [521, 615, 520, 617]

// Module 614 (baseIsNative)
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
    tmp4 = tmp(615)(arg0);
  }
  let isMatch = !tmp4;
  if (isMatch) {
    const obj = isFunction(arg0) ? closure_3 : re2;
    isMatch = obj.test(tmp(617)(arg0));
  }
  return isMatch;
};
