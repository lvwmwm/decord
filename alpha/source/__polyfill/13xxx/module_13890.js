// Module ID: 13890
// Function ID: 13891
// Dependencies: [13859, 13891, 13834, 13887]

// Module 13890
import _mod13859 from "module_13859" /* 13859 */;


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
  if (_mod13859(value)) {
    tmp3(13891)(value, name, obj);
  }
  if (obj.global) {
    if (flag) {
      arg0[arg1] = value;
    } else {
      tmp3(13834)(arg1, value);
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
        tmp3(13887).f(arg0, arg1, obj2);
        const tmp3Result = tmp3(13887);
      }
    } catch (err) {
    }
  }
  return arg0;
};
