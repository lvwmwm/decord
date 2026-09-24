// Module ID: 14675
// Function ID: 14676
// Dependencies: [14644, 14676, 14619, 14672]

// Module 14675
import _mod14644 from "module_14644" /* 14644 */;


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
  if (_mod14644(value)) {
    tmp3(14676)(value, name, obj);
  }
  if (obj.global) {
    if (flag) {
      arg0[arg1] = value;
    } else {
      tmp3(14619)(arg1, value);
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
        tmp3(14672).f(arg0, arg1, obj2);
        const tmp3Result = tmp3(14672);
      }
    } catch (err) {
    }
  }
  return arg0;
};
