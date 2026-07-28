// Module ID: 13354
// Function ID: 102319
// Name: __core-js_shared__
// Dependencies: [13355]

// Module 13354 (__core-js_shared__)

export default (arg0, arg1) => {
  let obj = arg1;
  let tmp = require(13355) /* __core-js_shared__ */[arg0];
  if (!tmp) {
    if (!obj) {
      obj = {};
    }
    require(13355) /* __core-js_shared__ */[arg0] = obj;
    tmp = obj;
    const tmp4 = require(13355) /* __core-js_shared__ */;
  }
  return tmp;
};
