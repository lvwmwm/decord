// Module ID: 15263
// Function ID: 15264
// Dependencies: [15232, 15264, 15207, 15260]

// Module 15263
import _mod15207 from "module_15207" /* 15207 */;
import _mod15232 from "module_15232" /* 15232 */;
import defineProperty2 from "defineProperty2" /* 15260 */;
import _mod15264 from "module_15264" /* 15264 */;


export default (arg0, arg1, value, arg3) => {
  const obj = arg3 || {};
  let flag = obj.enumerable;
  let name = arg1;
  const tmp = arg1;
  if (undefined !== obj.name) {
    name = obj.name;
  }
  if (_mod15232(value)) {
    _mod15264(value, name, obj);
  }
  if (obj.global) {
    if (flag) {
      arg0[arg1] = value;
    } else {
      _mod15207(arg1, value);
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
