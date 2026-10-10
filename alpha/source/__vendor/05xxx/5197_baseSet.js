// Module ID: 5197
// Function ID: 5198
// Name: baseSet
// Dependencies: [521, 603, 600, 543, 5165]

// Module 5197 (baseSet)
import isObject from "isObject" /* 521 */;
import toKey from "toKey" /* 600 */;

let tmp;
const castPath = tmp(603);

export default function baseSet(arg0, arg1, arg2, fn) {
  if (isObject(arg0)) {
    const arr = castPath(arg1, arg0);
    if (null != arg0) {
      let num2 = 0;
      let tmp16 = arg0;
      if (0 < arr.length) {
        const tmp8 = toKey(arr[num2]);
        while ("__proto__" !== tmp8) {
          if ("constructor" === tmp8) {
            break;
          } else if ("prototype" === tmp8) {
            break;
          } else {
            let tmp13 = arg2;
            if (num2 !== tmp4) {
              let tmp11 = tmp16[tmp8];
              let tmp12;
              if (fn) {
                tmp12 = fn(tmp11, tmp8, tmp16);
              }
              tmp13 = tmp12;
              if (undefined === tmp12) {
                if (!tmp6(521)(tmp11)) {
                  tmp11 = tmp6(543)(arr[num2 + 1]) ? [] : {};
                }
                tmp13 = tmp11;
              }
            }
            let tmp14 = tmp6(5165)(tmp16, tmp8, tmp13);
            let tmp15 = tmp16[tmp8];
            if (null != tmp15) {
              num2 = num2 + 1;
              tmp16 = tmp15;
            }
          }
        }
        return arg0;
      }
    }
    return arg0;
  } else {
    return arg0;
  }
};
