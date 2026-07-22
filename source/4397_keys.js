// Module ID: 4397
// Function ID: 38823
// Name: keys
// Dependencies: []

// Module 4397 (keys)
if (keys) {
  let keys2 = function keys(arg0) {
    return keys(arg0);
  };
} else {
  keys2 = require(dependencyMap[0]);
}
keys = Object.keys;
keys2.shim = function shimObjectKeys() {
  if (Object.keys) {
    if (!(arg0, arg1) => {
      const keys = Object.keys(arguments);
      let tmp = keys;
      if (keys) {
        tmp = keys.length === arguments.length;
      }
      return tmp;
    }(1, 2)) {
      const _Object2 = Object;
      Object.keys = function keys(arg0) {
        if (callback(closure_1[1])(arg0)) {
          let tmpResult = tmp(callback2.call(arg0));
        } else {
          tmpResult = tmp(arg0);
        }
        return tmpResult;
      };
    }
  } else {
    const _Object = Object;
    Object.keys = keys2;
  }
  return Object.keys || keys2;
};

export default keys2;
