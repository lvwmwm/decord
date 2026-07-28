// Module ID: 13396
// Function ID: 102402
// Dependencies: [13365, 13397, 13340, 13393]

// Module 13396

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
  if (require(13365) /* all */(value)) {
    require(13397)(value, name, obj);
  }
  if (obj.global) {
    if (flag) {
      arg0[arg1] = value;
    } else {
      require(13340) /* check */(arg1, value);
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
        let obj2 = require(13393) /* defineProperty */;
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
