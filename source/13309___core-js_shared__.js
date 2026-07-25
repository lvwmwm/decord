// Module ID: 13309
// Function ID: 102141
// Name: __core-js_shared__
// Dependencies: [13310]

// Module 13309 (__core-js_shared__)

export default (arg0, arg1) => {
  let obj = arg1;
  let tmp = require(13310) /* __core-js_shared__ */[arg0];
  if (!tmp) {
    if (!obj) {
      obj = {};
    }
    require(13310) /* __core-js_shared__ */[arg0] = obj;
    tmp = obj;
    const tmp4 = require(13310) /* __core-js_shared__ */;
  }
  return tmp;
};
