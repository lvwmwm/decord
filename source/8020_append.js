// Module ID: 8020
// Function ID: 63617
// Name: append
// Dependencies: []

// Module 8020 (append)
function append(arg0, arg1, arg2, arg3, arg4, arg5) {
  let tmp = 1 !== arg0;
  if (!tmp) {
    tmp = 0 !== arg1;
  }
  if (!tmp) {
    tmp = 0 !== arg2;
  }
  if (!tmp) {
    tmp = 1 !== arg3;
  }
  if (tmp) {
    if (closure_8) {
      closure_8 = false;
      let closure_2 = arg0;
      let closure_3 = arg1;
      let closure_4 = arg2;
      let closure_5 = arg3;
      let closure_6 = arg4;
      let closure_7 = arg5;
    } else {
      if (tmp) {
        closure_2 = tmp4 * arg0 + tmp6 * arg1;
        closure_3 = tmp5 * arg0 + tmp7 * arg1;
        closure_4 = tmp4 * arg2 + tmp6 * arg3;
        closure_5 = tmp5 * arg2 + tmp7 * arg3;
      }
      if (tmp2) {
        closure_6 = tmp4 * arg4 + tmp6 * arg5 + closure_6;
        closure_7 = tmp5 * arg4 + tmp7 * arg5 + closure_7;
      }
    }
  }
}
let closure_0 = Math.PI / 180;
const items = [];
let closure_2 = 1;
let closure_3 = 0;
let closure_4 = 0;
let closure_5 = 1;
let closure_6 = 0;
let closure_7 = 0;
let closure_8 = true;
arg5.identity = items;
arg5.reset = function reset() {
  if (!closure_8) {
    let closure_5 = 1;
    let closure_2 = 1;
    let closure_7 = 0;
    let closure_6 = 0;
    let closure_4 = 0;
    let closure_3 = 0;
    closure_8 = true;
  }
};
arg5.toArray = function toArray() {
  if (!closure_8) {
    const items = [closure_2, closure_3, closure_4, closure_5, closure_6, closure_7];
  }
  return items;
};
arg5.append = append;
arg5.appendTransform = function appendTransform(arg0, arg1, scaleX, scaleY, rotation, skewX, skewY, originX, originY) {
  let num2 = 1;
  let num3 = 0;
  if (rotation % 360) {
    const result = rotation * closure_0;
    const _Math = Math;
    num2 = Math.cos(result);
    const _Math2 = Math;
    num3 = Math.sin(result);
  }
  const result1 = num2 * scaleX;
  const result2 = num3 * scaleX;
  const result3 = -num3 * scaleY;
  const result4 = num2 * scaleY;
  if (!skewX) {
    if (!skewY) {
      append(result1, result2, result3, result4, arg0, arg1);
    }
    let tmp19 = originX;
    if (!originX) {
      tmp19 = originY;
    }
    if (tmp19) {
      closure_6 = closure_6 - (originX * closure_2 + originY * closure_4);
      closure_7 = closure_7 - (originX * closure_3 + originY * closure_5);
      let closure_8 = false;
    }
  }
  const tanResult = Math.tan(skewY * closure_0);
  const tanResult1 = Math.tan(skewX * closure_0);
  append(result1 + tanResult1 * result2, tanResult * result1 + result2, result3 + tanResult1 * result4, tanResult * result3 + result4, arg0, arg1);
};
