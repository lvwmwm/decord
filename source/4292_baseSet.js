// Module ID: 4292
// Function ID: 37509
// Name: baseSet
// Dependencies: []

// Module 4292 (baseSet)

export default function baseSet(arg0, arg1, arg2, arg3) {
  if (require(dependencyMap[0])(arg0)) {
    const arr = require(dependencyMap[1])(arg1, arg0);
    if (null != arg0) {
      let num2 = 0;
      let tmp23 = arg0;
      if (0 < length) {
        const tmp8 = require(dependencyMap[2])(arr[num2]);
        while ("__proto__" !== tmp8) {
          if ("constructor" === tmp8) {
            break;
          } else if ("prototype" === tmp8) {
            break;
          } else {
            let tmp11 = arg2;
            if (num2 != tmp4) {
              let tmp9 = tmp23[tmp8];
              let tmp10;
              if (arg3) {
                tmp10 = arg3(tmp9, tmp8, tmp23);
              }
              tmp11 = tmp10;
              let tmp12 = tmp9;
              if (undefined === tmp10) {
                let tmp13 = require;
                let tmp14 = dependencyMap;
                let tmp15 = tmp9;
                if (require(dependencyMap[0])(tmp9)) {
                  tmp11 = tmp9;
                  let tmp19 = tmp9;
                } else {
                  let tmp16 = require;
                  let tmp17 = dependencyMap;
                  let tmp18 = require(dependencyMap[3])(arr[num2 + 1]) ? [] : {};
                }
              }
            }
            let tmp20 = require;
            let tmp21 = dependencyMap;
            let tmp22 = require(dependencyMap[4])(tmp23, tmp8, tmp11);
            tmp23 = tmp23[tmp8];
            if (null != tmp23) {
              num2 = num2 + 1;
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
