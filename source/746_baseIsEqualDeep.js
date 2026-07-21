// Module ID: 746
// Function ID: 8795
// Name: baseIsEqualDeep
// Dependencies: []

// Module 746 (baseIsEqualDeep)

export default function baseIsEqualDeep(value, value2) {
  let tmp = arg5;
  const tmp2 = require(dependencyMap[0])(value);
  let str = "[object Array]";
  let str2 = "[object Array]";
  if (!tmp2) {
    str2 = require(dependencyMap[1])(value);
  }
  if (!tmp3) {
    str = require(dependencyMap[1])(value2);
  }
  if (str2 == "[object Arguments]") {
    str2 = "[object Object]";
  }
  if (str == "[object Arguments]") {
    str = "[object Object]";
  }
  let callResult = str == "[object Object]";
  let flag = tmp2;
  let flag2 = tmp8;
  if (str2 == str) {
    flag = tmp2;
    flag2 = tmp8;
    if (require(dependencyMap[2])(value)) {
      flag = true;
      flag2 = false;
      if (!require(dependencyMap[2])(value2)) {
        return false;
      }
    }
  }
  if (str2 == str) {
    if (!flag2) {
      let tmp18 = tmp;
      if (!tmp) {
        tmp18 = require(dependencyMap[3]);
        const prototype = tmp18.prototype;
        tmp18 = new tmp18();
      }
      if (!flag) {
        if (!require(dependencyMap[4])(value)) {
          let tmp32 = require(dependencyMap[6])(value, value2, str2, arg2, arg3, arg4, tmp18);
        }
        return tmp32;
      }
      tmp32 = require(dependencyMap[5])(value, value2, arg2, arg3, arg4, tmp18);
    }
  }
  if (!(1 & arg2)) {
    if (flag2) {
      flag2 = hasOwnProperty.call(value, "__wrapped__");
    }
    if (callResult) {
      callResult = hasOwnProperty.call(value2, "__wrapped__");
    }
    let valueResult = value;
    if (flag2) {
      valueResult = value.value();
    }
    valueResult = value2;
    if (callResult) {
      valueResult = value2.value();
    }
    let tmp48 = tmp;
    if (!tmp) {
      tmp48 = require(dependencyMap[3]);
      const prototype2 = tmp48.prototype;
      tmp48 = new tmp48();
    }
    return arg4(valueResult, valueResult, arg2, arg3, tmp48);
  }
  let tmp56 = tmp10;
  if (str2 == str) {
    if (!tmp) {
      const tmp59 = require(dependencyMap[3]);
      const prototype3 = tmp59.prototype;
      tmp = new tmp59();
    }
    tmp56 = require(dependencyMap[7])(value, value2, arg2, arg3, arg4, tmp);
  }
  return tmp56;
};
