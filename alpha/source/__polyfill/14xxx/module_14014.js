// Module ID: 14014
// Function ID: 14015
// Dependencies: [13983, 14015, 13958, 14011]

// Module 14014
import _mod13983 from "module_13983" /* 13983 */;


export default (arg0, arg1, value, arg3) => {
  let obj = arg3;
  if (!arg3) {
    obj = {};
  }
  let flag = obj.enumerable;
  let name = arg1;
  if (undefined !== obj.name) {
    name = obj.name;
  }
  if (_mod13983(value)) {
    tmp3(14015)(value, name, obj);
  }
  if (obj.global) {
    if (flag) {
      arg0[arg1] = value;
    } else {
      tmp3(13958)(arg1, value);
    }
  } else {
    try {
      if (obj.unsafe) {
        if (arg0[arg1]) {
          flag = true;
        }
      } else {
        delete tmp[tmp2];
      }
      if (flag) {
        arg0[arg1] = value;
      } else {
        const obj2 = { value, enumerable: false, configurable: !obj.nonConfigurable, writable: !obj.nonWritable };
        tmp3(14011).f(arg0, arg1, obj2);
        const tmp3Result = tmp3(14011);
      }
    } catch (err) {
    }
  }
  return arg0;
};
