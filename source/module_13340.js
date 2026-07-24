// Module ID: 13340
// Function ID: 102097
// Dependencies: [13309, 13341, 13284, 13337]

// Module 13340

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
  if (require(13309) /* all */(value)) {
    require(13341)(value, name, obj);
  }
  if (obj.global) {
    if (flag) {
      arg0[arg1] = value;
    } else {
      require(13284) /* check */(arg1, value);
    }
  } else {
    if (obj.unsafe) {
      if (arg0[arg1]) {
        flag = true;
      }
    } else {
      delete tmp2[tmp];
    }
    while (true) {
      let tmp12 = flag;
      if (flag) {
        let tmp19 = arg0;
        let tmp20 = arg1;
        let tmp21 = value;
        arg0[arg1] = value;
      } else {
        let tmp13 = require;
        let tmp14 = dependencyMap;
        let num2 = 3;
        let obj2 = require(13337) /* defineProperty */;
        let tmp15 = arg0;
        let tmp16 = arg1;
        obj = {};
        let tmp17 = value;
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
