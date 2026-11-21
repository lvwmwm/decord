// Module ID: 15595
// Function ID: 15596
// Dependencies: [15564, 15596, 15539, 15592]

// Module 15595
import _mod15539 from "module_15539" /* 15539 */;
import _mod15564 from "module_15564" /* 15564 */;
import defineProperty2 from "defineProperty2" /* 15592 */;
import _mod15596 from "module_15596" /* 15596 */;


export default (arg0, arg1, value, arg3) => {
  const obj = arg3 || {};
  let flag = obj.enumerable;
  let name = arg1;
  const tmp = arg1;
  if (undefined !== obj.name) {
    name = obj.name;
  }
  if (_mod15564(value)) {
    _mod15596(value, name, obj);
  }
  if (obj.global) {
    if (flag) {
      arg0[arg1] = value;
    } else {
      _mod15539(arg1, value);
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
