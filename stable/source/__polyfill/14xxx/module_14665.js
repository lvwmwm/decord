// Module ID: 14665
// Function ID: 14666
// Dependencies: [14634, 14666, 14609, 14662]

// Module 14665
import _mod14634 from "module_14634" /* 14634 */;


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
  if (_mod14634(value)) {
    tmp3(14666)(value, name, obj);
  }
  if (obj.global) {
    if (flag) {
      arg0[arg1] = value;
    } else {
      tmp3(14609)(arg1, value);
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
        tmp3(14662).f(arg0, arg1, obj2);
        const tmp3Result = tmp3(14662);
      }
    } catch (err) {
    }
  }
  return arg0;
};
