// Module ID: 14634
// Function ID: 14635
// Dependencies: [14603, 14635, 14578, 14631]

// Module 14634
import _mod14603 from "module_14603" /* 14603 */;


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
  if (_mod14603(value)) {
    tmp3(14635)(value, name, obj);
  }
  if (obj.global) {
    if (flag) {
      arg0[arg1] = value;
    } else {
      tmp3(14578)(arg1, value);
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
        tmp3(14631).f(arg0, arg1, obj2);
        const tmp3Result = tmp3(14631);
      }
    } catch (err) {
    }
  }
  return arg0;
};
