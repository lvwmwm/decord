// Module ID: 14729
// Function ID: 14730
// Dependencies: [14698, 14730, 14673, 14726]

// Module 14729
import _mod14698 from "module_14698" /* 14698 */;


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
  if (_mod14698(value)) {
    tmp3(14730)(value, name, obj);
  }
  if (obj.global) {
    if (flag) {
      arg0[arg1] = value;
    } else {
      tmp3(14673)(arg1, value);
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
        tmp3(14726).f(arg0, arg1, obj2);
        const tmp3Result = tmp3(14726);
      }
    } catch (err) {
    }
  }
  return arg0;
};
