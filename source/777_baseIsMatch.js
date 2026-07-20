// Module ID: 777
// Function ID: 8853
// Name: baseIsMatch
// Dependencies: []

// Module 777 (baseIsMatch)

export default function baseIsMatch(arg0, arg1, arg2, arg3) {
  if (null == arg0) {
    return !length;
  } else {
    const _Object = Object;
    const ObjectResult = Object(arg0);
    let diff = tmp36 - 1;
    let tmp6 = diff;
    if (+length) {
      while (true) {
        let tmp2 = arg2[diff];
        if (tmp) {
          if (tmp2[2]) {
            let tmp3 = tmp2[1] !== ObjectResult[tmp2[0]];
            if (tmp3) {
              break;
            } else {
              let tmp4 = +diff;
              diff = tmp4 - 1;
              tmp6 = diff;
            }
          }
        }
        tmp3 = !(tmp2[0] in ObjectResult);
      }
      return false;
    }
    let sum = tmp6 + 1;
    if (sum < length) {
      while (true) {
        let tmp10 = arg2[sum];
        let first = tmp10[0];
        let tmp12 = ObjectResult[first];
        let tmp13 = tmp10[1];
        if (tmp) {
          if (tmp10[2]) {
            let tmp16 = tmp8;
            let tmp20 = tmp9;
            if (undefined === tmp12) {
              tmp16 = tmp8;
              tmp20 = tmp9;
              if (!(first in ObjectResult)) {
                let flag2 = false;
                return false;
              }
            }
            sum = sum + 1;
            let tmp8 = tmp16;
            let tmp9 = tmp20;
          }
        }
        let tmp14 = require;
        let tmp15 = dependencyMap;
        tmp16 = require(dependencyMap[0]);
        let prototype = tmp16.prototype;
        let tmp17 = new.target;
        let tmp18 = new.target;
        tmp16 = new tmp16();
        tmp20 = tmp9;
        if (arg3) {
          let tmp21 = tmp12;
          let tmp22 = tmp13;
          let tmp23 = first;
          let tmp24 = ObjectResult;
          let tmp25 = arg1;
          let tmp26 = tmp16;
          tmp20 = arg3(tmp12, tmp13, first, ObjectResult, arg1, tmp16);
        }
        let tmp27 = tmp20;
        if (undefined === tmp20) {
          let tmp28 = require;
          let tmp29 = dependencyMap;
          let tmp30 = tmp13;
          let tmp31 = tmp12;
          let num2 = 3;
          let tmp32 = arg3;
          let tmp33 = tmp16;
          tmp27 = require(dependencyMap[1])(tmp13, tmp12, 3, arg3, tmp16);
        }
        if (!tmp27) {
          break;
        }
      }
      return false;
    }
    return true;
  }
};
