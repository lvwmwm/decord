// Module ID: 13157
// Function ID: 99536
// Dependencies: [2063597619, 3892314163, 2080374785, 1929379891]

// Module 13157

export default (arg0, arg1, value) => {
  let obj = arg3;
  if (!arg3) {
    obj = {};
  }
  let flag = obj.enumerable;
  if (undefined !== obj.name) {
    let name = obj.name;
  } else {
    name = arg1;
  }
  if (require(dependencyMap[0])(value)) {
    require(dependencyMap[1])(value, name, obj);
  }
  if (obj.global) {
    if (flag) {
      arg0[arg1] = value;
    } else {
      require(dependencyMap[2])(arg1, value);
    }
  } else {
    if (obj.unsafe) {
      if (arg0[arg1]) {
        flag = true;
      }
    } else {
      delete r7[r5];
    }
    while (true) {
      let tmp10 = flag;
      if (flag) {
        let tmp17 = arg0;
        let tmp18 = arg1;
        let tmp19 = value;
        arg0[arg1] = value;
      } else {
        let tmp11 = require;
        let tmp12 = dependencyMap;
        let num2 = 3;
        let obj2 = require(dependencyMap[3]);
        let tmp13 = arg0;
        let tmp14 = arg1;
        obj = {};
        let tmp15 = value;
        obj.value = value;
        let flag2 = false;
        obj.enumerable = false;
        obj.configurable = !obj.nonConfigurable;
        obj.writable = !obj.nonWritable;
        let fResult = obj2.f(arg0, arg1, obj);
      }
    }
  }
  return arg0;
};
