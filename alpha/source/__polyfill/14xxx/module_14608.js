// Module ID: 14608
// Function ID: 14609
// Dependencies: [14577, 14609, 14552, 14605]

// Module 14608
import _mod14552 from "module_14552" /* 14552 */;
import _mod14577 from "module_14577" /* 14577 */;
import defineProperty2 from "defineProperty2" /* 14605 */;
import _mod14609 from "module_14609" /* 14609 */;


export default (arg0, arg1, value, arg3) => {
  const obj = arg3 || {};
  let flag = obj.enumerable;
  let name = arg1;
  const tmp = arg1;
  if (undefined !== obj.name) {
    name = obj.name;
  }
  if (_mod14577(value)) {
    _mod14609(value, name, obj);
  }
  if (obj.global) {
    if (flag) {
      arg0[arg1] = value;
    } else {
      _mod14552(arg1, value);
    }
  } else {
    try {
      if (obj.unsafe) {
        if (arg0[arg1]) {
          flag = true;
        }
      } else {
        delete tmp5[tmp];
      }
    } catch (err) {
    }
    const tmp6 = flag;
    if (tmp6) {
      arg0[arg1] = value;
    } else {
      const obj2 = { value, enumerable: false, configurable: !obj.nonConfigurable, writable: !obj.nonWritable };
      const tmp2Result = defineProperty2;
      tmp2Result.f(arg0, arg1, obj2);
    }
  }
  return arg0;
};
