// Module ID: 746
// Function ID: 8797
// Name: baseIsEqualDeep
// Dependencies: [591, 747, 605, 752, 607, 758, 764, 768]

// Module 746 (baseIsEqualDeep)

export default function baseIsEqualDeep(value, value2) {
  let tmp = arg5;
  const tmp2 = require(591)(value);
  let str = "[object Array]";
  let str2 = "[object Array]";
  if (!tmp2) {
    str2 = require(747) /* getTag */(value);
  }
  if (!tmp3) {
    str = require(747) /* getTag */(value2);
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
    if (require(605) /* isBuffer */(value)) {
      flag = true;
      flag2 = false;
      if (!require(605) /* isBuffer */(value2)) {
        return false;
      }
    }
  }
  if (str2 == str) {
    if (!flag2) {
      let tmp18 = tmp;
      if (!tmp) {
        tmp18 = require(752) /* Stack */;
        const prototype = tmp18.prototype;
        tmp18 = new tmp18();
      }
      if (!flag) {
        if (!require(607)(value)) {
          let tmp32 = require(764) /* valueOf */(value, value2, str2, arg2, arg3, arg4, tmp18);
        }
        return tmp32;
      }
      tmp32 = require(758) /* equalArrays */(value, value2, arg2, arg3, arg4, tmp18);
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
      tmp48 = require(752) /* Stack */;
      const prototype2 = tmp48.prototype;
      tmp48 = new tmp48();
    }
    return arg4(valueResult, valueResult, arg2, arg3, tmp48);
  }
  let tmp56 = tmp10;
  if (str2 == str) {
    if (!tmp) {
      const tmp59 = require(752) /* Stack */;
      const prototype3 = tmp59.prototype;
      tmp = new tmp59();
    }
    tmp56 = require(768) /* equalObjects */(value, value2, arg2, arg3, arg4, tmp);
  }
  return tmp56;
};
