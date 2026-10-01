// Module ID: 14049
// Function ID: 14050
// Dependencies: [14018, 14050, 13993, 14046]

// Module 14049
import _mod14018 from "module_14018" /* 14018 */;


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
  if (_mod14018(value)) {
    tmp3(14050)(value, name, obj);
  }
  if (obj.global) {
    if (flag) {
      arg0[arg1] = value;
    } else {
      tmp3(13993)(arg1, value);
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
        tmp3(14046).f(arg0, arg1, obj2);
        const tmp3Result = tmp3(14046);
      }
    } catch (err) {
    }
  }
  return arg0;
};
