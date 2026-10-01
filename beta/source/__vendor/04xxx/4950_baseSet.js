// Module ID: 4950
// Function ID: 4951
// Name: baseSet
// Dependencies: [521, 592, 589, 543, 4918]

// Module 4950 (baseSet)
import isObject from "isObject" /* 521 */;
import toKey from "toKey" /* 589 */;

let tmp;
const castPath = tmp(592);

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
            let tmp14 = tmp6(4918)(tmp16, tmp8, tmp13);
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
