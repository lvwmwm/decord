// Module ID: 13845
// Function ID: 13846
// Dependencies: [13814, 13846, 13789, 13842]

// Module 13845
import _mod13814 from "module_13814" /* 13814 */;


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
  if (_mod13814(value)) {
    tmp3(13846)(value, name, obj);
  }
  if (obj.global) {
    if (flag) {
      arg0[arg1] = value;
    } else {
      tmp3(13789)(arg1, value);
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
        tmp3(13842).f(arg0, arg1, obj2);
        const tmp3Result = tmp3(13842);
      }
    } catch (err) {
    }
  }
  return arg0;
};
