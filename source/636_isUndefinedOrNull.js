// Module ID: 636
// Function ID: 7329
// Name: isUndefinedOrNull
// Dependencies: [637, 638]

// Module 636 (isUndefinedOrNull)
function isUndefinedOrNull(arr2) {
  return null == arr2;
}
function isBuffer(copy) {
  let tmp = !copy;
  if (!tmp) {
    tmp = "object" !== typeof copy;
  }
  if (!tmp) {
    tmp = "number" !== typeof copy.length;
  }
  let tmp2 = !tmp;
  if (!tmp) {
    let tmp3 = "function" === typeof copy.copy && "function" === typeof copy.slice;
    if (tmp3) {
      let tmp4 = copy.length > 0;
      if (tmp4) {
        tmp4 = "number" !== typeof copy[0];
      }
      tmp3 = !tmp4;
    }
    tmp2 = tmp3;
  }
  return tmp2;
}
const fn = (arr2, getTime) => {
  let time = arr2;
  let obj = arg2;
  if (!arg2) {
    obj = {};
  }
  let tmp = time === getTime;
  if (tmp) {
    return tmp;
  } else {
    const _Date = Date;
    if (!(time instanceof Date)) {
      if (time) {
        if (getTime) {
          let flag = false;
          if (!isUndefinedOrNull(time)) {
            flag = false;
            if (!isUndefinedOrNull(arr2)) {
              flag = false;
              if (arr.prototype === arr2.prototype) {
                if (require(637) /* supported */(arr)) {
                  const tmp55 = !require(637) /* supported */(arr2);
                  let tmp56 = !tmp55;
                  if (!tmp55) {
                    const callResult = slice.call(arr);
                    const callResult1 = slice.call(arr2);
                    tmp56 = fn(callResult, callResult1, obj);
                  }
                  flag = tmp56;
                } else if (isBuffer(arr)) {
                  flag = false;
                  if (isBuffer(arr2)) {
                    flag = false;
                    if (arr.length === arr2.length) {
                      let num2 = 0;
                      flag = true;
                      if (0 < arr.length) {
                        flag = false;
                        while (arr[num2] === arr2[num2]) {
                          let tmp49 = num2;
                          let sum = num2 + 1;
                          num2 = sum;
                          let tmp51 = time;
                          flag = true;
                          if (sum < arr.length) {
                            continue;
                          } else {
                            break;
                          }
                          break;
                        }
                      }
                    }
                  }
                } else {
                  const arr3 = require(638) /* shim */(arr);
                  const arr4 = require(638) /* shim */(arr2);
                  flag = false;
                  if (arr3.length == arr4.length) {
                    const sorted = arr3.sort();
                    const sorted1 = arr4.sort();
                    const diff = arr3.length - 1;
                    let tmp22 = diff;
                    if (diff < 0) {
                      const diff1 = arr3.length - 1;
                      let tmp30 = diff1;
                      if (diff1 < 0) {
                        flag = typeof arr === typeof arr2;
                      } else {
                        flag = false;
                        while (fn(arr[arr3[tmp30]], arr2[arr3[tmp30]], tmp3)) {
                          let tmp38 = tmp30;
                          let diff2 = tmp30 - 1;
                          tmp30 = diff2;
                          break;
                        }
                      }
                    } else {
                      flag = false;
                      while (arr3[tmp22] == arr4[tmp22]) {
                        let tmp26 = tmp22;
                        let diff3 = tmp22 - 1;
                        tmp22 = diff3;
                        break;
                      }
                    }
                  }
                }
              }
            }
          }
          tmp3 = obj;
        }
      }
      if (!obj.strict) {
        tmp = time == getTime;
      }
      flag = tmp;
    } else {
      const _Date2 = Date;
    }
    time = time.getTime();
    flag = time === getTime.getTime();
  }
};

export default fn;
