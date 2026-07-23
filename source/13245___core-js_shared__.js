// Module ID: 13245
// Function ID: 101687
// Name: __core-js_shared__
// Dependencies: [13246]

// Module 13245 (__core-js_shared__)

export default (arg0, arg1) => {
  let obj = arg1;
  let tmp = require(13246) /* __core-js_shared__ */[arg0];
  if (!tmp) {
    if (!obj) {
      obj = {};
    }
    require(13246) /* __core-js_shared__ */[arg0] = obj;
    tmp = obj;
    const tmp4 = require(13246) /* __core-js_shared__ */;
  }
  return tmp;
};
