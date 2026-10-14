// Module ID: 644
// Function ID: 645
// Name: baseIsEqualDeep
// Dependencies: [514, 645, 536, 650, 538, 656, 662, 666]

// Module 644 (baseIsEqualDeep)
import _mod514 from "module_514" /* 514 */;
import _mod536 from "module_536" /* 536 */;
import _mod538 from "module_538" /* 538 */;


export default function baseIsEqualDeep(value, value2, arg2, arg3, fn, arg5) {
  const tmp3 = _mod514(value);
  let str = "[object Array]";
  let str2 = "[object Array]";
  const tmp4 = _mod514(value2);
  if (!tmp3) {
    str2 = tmp(645)(value);
  }
  if (!tmp4) {
    str = tmp(645)(value2);
  }
  if (str2 == "[object Arguments]") {
    str2 = "[object Object]";
  }
  if (str == "[object Arguments]") {
    str = "[object Object]";
  }
  let callResult = str == "[object Object]";
  let flag = tmp5;
  let flag2 = tmp3;
  if (str2 == str) {
    flag = tmp5;
    flag2 = tmp3;
    if (_mod536(value)) {
      flag2 = true;
      flag = false;
      if (!_mod536(value2)) {
        return false;
      }
    }
  }
  let tmp8 = arg5;
  if (str2 == str) {
    if (!flag) {
      let tmp9 = tmp8;
      if (!tmp9) {
        const self = this;
        const self2 = this;
        tmp9 = new tmp(650)();
      }
      if (!flag2) {
        let tmp17;
        if (!_mod538(value)) {
          tmp17 = tmp(662)(value, value2, str2, arg2, arg3, fn, tmp9);
        }
        return tmp17;
      }
      tmp17 = tmp(656)(value, value2, arg2, arg3, fn, tmp9);
    }
  }
  if (!(1 & arg2)) {
    if (flag) {
      flag = hasOwnProperty.call(value, "__wrapped__");
    }
    if (callResult) {
      callResult = hasOwnProperty.call(value2, "__wrapped__");
    }
    let valueResult = value;
    if (flag) {
      valueResult = value.value();
    }
    let valueResult2 = value2;
    if (callResult) {
      valueResult2 = value2.value();
    }
    let tmp26 = tmp8;
    if (!tmp26) {
      const self3 = this;
      const self4 = this;
      tmp26 = new tmp(650)();
    }
    return fn(valueResult, valueResult2, arg2, arg3, tmp26);
  }
  let tmp32 = tmp7;
  if (tmp32) {
    if (!tmp8) {
      const self5 = this;
      const self6 = this;
      tmp8 = new tmp(650)();
    }
    tmp32 = tmp(666)(value, value2, arg2, arg3, fn, tmp8);
  }
  return tmp32;
};
