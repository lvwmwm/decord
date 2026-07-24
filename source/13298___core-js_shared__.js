// Module ID: 13298
// Function ID: 102014
// Name: __core-js_shared__
// Dependencies: [13299]

// Module 13298 (__core-js_shared__)

export default (arg0, arg1) => {
  let obj = arg1;
  let tmp = require(13299) /* __core-js_shared__ */[arg0];
  if (!tmp) {
    if (!obj) {
      obj = {};
    }
    require(13299) /* __core-js_shared__ */[arg0] = obj;
    tmp = obj;
    const tmp4 = require(13299) /* __core-js_shared__ */;
  }
  return tmp;
};
