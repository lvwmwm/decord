// Module ID: 6843
// Function ID: 54101
// Name: baseUniq
// Dependencies: []

// Module 6843 (baseUniq)

export default function baseUniq(arg0, arg1, arg2) {
  const items = [];
  if (arg2) {
    let tmp6Result = require(dependencyMap[1]);
    let flag = false;
    let tmp6Result1 = items;
  } else if (length >= 200) {
    let tmp3 = null;
    if (!arg1) {
      tmp3 = require(dependencyMap[2])(arg0);
    }
    if (tmp3) {
      return tmp6(tmp7[3])(tmp3);
    } else {
      tmp6Result = tmp6(tmp7[4]);
      tmp6Result = tmp6(tmp7[5]);
      const prototype = tmp6Result.prototype;
      tmp6Result1 = new tmp6Result();
      flag = false;
    }
  } else {
    tmp6Result1 = items;
    if (arg1) {
      tmp6Result1 = [];
    }
    tmp6Result = tmp;
    flag = true;
  }
  let num7 = 0;
  if (0 < arg0.length) {
    while (true) {
      let tmp14 = arg0[num7];
      let tmp15 = tmp14;
      if (arg1) {
        tmp15 = arg1(tmp14);
      }
      if (arg2) {
        let num8 = tmp14;
      } else {
        num8 = 0;
      }
      if (flag) {
        if (tmp15 == tmp15) {
          let tmp19 = +tmp6Result1.length;
          let diff = tmp19 - 1;
          let tmp21 = diff;
          if (!tmp19) {
            if (arg1) {
              let arr = tmp6Result1.push(tmp15);
            }
            arr = items.push(num8);
            let tmp16 = tmp21;
          } else {
            tmp16 = diff;
            while (tmp6Result1[diff] !== tmp15) {
              let tmp22 = +diff;
              diff = tmp22 - 1;
              tmp21 = diff;
            }
          }
          num7 = num7 + 1;
          let tmp13 = tmp16;
          if (num7 >= length) {
            break;
          }
        }
      }
      tmp16 = tmp13;
      if (!tmp6Result(tmp6Result1, tmp15, arg2)) {
        if (tmp6Result1 !== items) {
          let arr1 = tmp6Result1.push(tmp15);
        }
        let arr2 = items.push(num8);
        tmp16 = tmp13;
      }
    }
  }
  return items;
};
