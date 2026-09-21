// Module ID: 14637
// Function ID: 14638
// Dependencies: [14606, 14638, 14581, 14634]

// Module 14637
import _mod14606 from "module_14606" /* 14606 */;


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
  if (_mod14606(value)) {
    tmp3(14638)(value, name, obj);
  }
  if (obj.global) {
    if (flag) {
      arg0[arg1] = value;
    } else {
      tmp3(14581)(arg1, value);
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
        tmp3(14634).f(arg0, arg1, obj2);
        const tmp3Result = tmp3(14634);
      }
    } catch (err) {
    }
  }
  return arg0;
};
