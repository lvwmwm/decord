// Module ID: 7031
// Function ID: 7032
// Name: baseUniq
// Dependencies: [7032, 7036, 7037, 666, 662, 658]

// Module 7031 (baseUniq)
import setToArray from "setToArray" /* 666 */;
import arrayIncludes from "arrayIncludes" /* 7032 */;


export default function baseUniq(arg0, fn, arg2) {
  let flag;
  let items1;
  let tmpResult = arrayIncludes;
  const items = [];
  if (arg2) {
    tmpResult = tmp(7036);
    flag = false;
    items1 = items;
  } else if (arg0.length >= 200) {
    let tmp4 = null;
    if (!fn) {
      tmp4 = tmp(7037)(arg0);
    }
    if (tmp4) {
      return setToArray(tmp4);
    } else {
      tmpResult = tmp(662);
      const self = this;
      const self2 = this;
      items1 = new tmp(658)();
      flag = false;
    }
  } else {
    items1 = items;
    if (fn) {
      items1 = [];
    }
    flag = true;
  }
  let num2 = 0;
  if (0 < arg0.length) {
    while (true) {
      let num3;
      let tmp5 = arg0[num2];
      let tmp7 = tmp5;
      if (fn) {
        tmp7 = fn(tmp5);
      }
      if (arg2) {
        num3 = tmp5;
      } else {
        num3 = 0;
      }
      if (flag) {
        if (tmp7 == tmp7) {
          let tmp10 = +items1.length;
          let diff = tmp10 - 1;
          if (!tmp10) {
            if (fn) {
              let arr = items1.push(tmp7);
            }
            let arr2 = items.push(num3);
          } else {
            while (items1[diff] !== tmp7) {
              let tmp13 = +diff;
              diff = tmp13 - 1;
            }
          }
          num2 = num2 + 1;
          if (num2 >= length) {
            break;
          }
        }
      }
      if (!tmpResult(items1, tmp7, arg2)) {
        if (items1 !== items) {
          let arr6 = items1.push(tmp7);
        }
        let arr7 = items.push(num3);
      }
    }
  }
  return items;
};
