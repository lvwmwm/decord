// Module ID: 14640
// Function ID: 14641
// Dependencies: [14609, 14641, 14584, 14637]

// Module 14640
import _mod14609 from "module_14609" /* 14609 */;


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
  if (_mod14609(value)) {
    tmp3(14641)(value, name, obj);
  }
  if (obj.global) {
    if (flag) {
      arg0[arg1] = value;
    } else {
      tmp3(14584)(arg1, value);
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
        tmp3(14637).f(arg0, arg1, obj2);
        const tmp3Result = tmp3(14637);
      }
    } catch (err) {
    }
  }
  return arg0;
};
