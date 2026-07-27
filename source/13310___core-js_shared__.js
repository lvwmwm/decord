// Module ID: 13310
// Function ID: 102146
// Name: __core-js_shared__
// Dependencies: [13311]

// Module 13310 (__core-js_shared__)

export default (arg0, arg1) => {
  let obj = arg1;
  let tmp = require(13311) /* __core-js_shared__ */[arg0];
  if (!tmp) {
    if (!obj) {
      obj = {};
    }
    require(13311) /* __core-js_shared__ */[arg0] = obj;
    tmp = obj;
    const tmp4 = require(13311) /* __core-js_shared__ */;
  }
  return tmp;
};
