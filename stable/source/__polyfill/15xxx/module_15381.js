// Module ID: 15381
// Function ID: 15382
// Dependencies: [15350, 15382, 15325, 15378]

// Module 15381
import _mod15325 from "module_15325" /* 15325 */;
import _mod15350 from "module_15350" /* 15350 */;
import defineProperty2 from "defineProperty2" /* 15378 */;
import _mod15382 from "module_15382" /* 15382 */;


export default (arg0, arg1, value, arg3) => {
  const obj = arg3 || {};
  let flag = obj.enumerable;
  let name = arg1;
  const tmp = arg1;
  if (undefined !== obj.name) {
    name = obj.name;
  }
  if (_mod15350(value)) {
    _mod15382(value, name, obj);
  }
  if (obj.global) {
    if (flag) {
      arg0[arg1] = value;
    } else {
      _mod15325(arg1, value);
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
