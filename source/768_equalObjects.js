// Module ID: 768
// Function ID: 8838
// Name: equalObjects
// Dependencies: [769]

// Module 768 (equalObjects)

export default function equalObjects(arg0, arg1, arg2, arg3, arg4, get) {
  const arr = require(769) /* getAllKeys */(arg0);
  if (arr.length != require(769) /* getAllKeys */(arg1).length) {
    if (!tmp) {
      return false;
    }
  }
  let diff = tmp2 - 1;
  let tmp4 = diff;
  if (+arr.length) {
    while (true) {
      let tmp5 = arr[diff];
      if (tmp) {
        let callResult = tmp5 in arg1;
      } else {
        let tmp6 = hasOwnProperty;
        callResult = hasOwnProperty.call(arg1, tmp5);
      }
      if (!callResult) {
        break;
      } else {
        let tmp8 = +diff;
        diff = tmp8 - 1;
        tmp4 = diff;
      }
    }
    return false;
  }
  let value = get.get(arg0);
  value = get.get(arg1);
  if (value) {
    if (value) {
      return value == arg1 && value == arg0;
    }
  }
  const result = get.set(arg0, arg1);
  const result1 = get.set(arg1, arg0);
  let sum = tmp4 + 1;
  let tmp14 = tmp;
  let flag3 = true;
  let tmp15 = tmp;
  if (sum < arr.length) {
    while (!arg3) {
      let tmp33;
      {
        let tmp34 = tmp17 === tmp18;
        if (!tmp34) {
          let tmp35 = tmp17;
          let tmp36 = tmp18;
          let tmp37 = arg2;
          let tmp38 = arg3;
          let tmp39 = get;
          tmp34 = arg4(tmp17, tmp18, arg2, arg3, get);
        }
        tmp33 = tmp34;
      }
      flag3 = false;
      tmp15 = tmp14;
      if (tmp33) {
        let tmp40 = tmp14;
        if (!tmp14) {
          tmp40 = "constructor" == tmp16;
        }
        sum = sum + 1;
        tmp14 = tmp40;
        flag3 = true;
        tmp15 = tmp40;
      }
    }
    if (tmp) {
      let tmp25 = arg3(tmp18, tmp17, tmp16, arg1, arg0, get);
    } else {
      tmp25 = arg3(tmp17, tmp18, tmp16, arg0, arg1, get);
    }
  }
  let flag4 = flag3;
  if (flag3) {
    flag4 = flag3;
    if (!tmp15) {
      const constructor = arg0.constructor;
      const constructor2 = arg1.constructor;
      let tmp41 = constructor == constructor2 || !("constructor" in arg0) || !("constructor" in arg1);
      if (!tmp41) {
        tmp41 = "function" === typeof constructor && constructor instanceof constructor && "function" === typeof constructor2 && constructor2 instanceof constructor2;
        const tmp42 = "function" === typeof constructor && constructor instanceof constructor && "function" === typeof constructor2 && constructor2 instanceof constructor2;
      }
      flag4 = flag3;
      if (!tmp41) {
        flag4 = false;
      }
    }
  }
  get.delete(arg0);
  get.delete(arg1);
  return flag4;
};
