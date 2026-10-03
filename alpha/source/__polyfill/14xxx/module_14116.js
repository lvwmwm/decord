// Module ID: 14116
// Function ID: 14117
// Dependencies: [14085, 14117, 14060, 14113]

// Module 14116
import _mod14060 from "module_14060" /* 14060 */;
import _mod14085 from "module_14085" /* 14085 */;
import defineProperty2 from "defineProperty2" /* 14113 */;
import _mod14117 from "module_14117" /* 14117 */;


export default (arg0, arg1, value, arg3) => {
  const obj = arg3 || {};
  let flag = obj.enumerable;
  let name = arg1;
  const tmp = arg1;
  if (undefined !== obj.name) {
    name = obj.name;
  }
  if (_mod14085(value)) {
    _mod14117(value, name, obj);
  }
  if (obj.global) {
    if (flag) {
      arg0[arg1] = value;
    } else {
      _mod14060(arg1, value);
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
