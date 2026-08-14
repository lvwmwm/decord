// Module ID: 13656
// Function ID: 13657
// Name: __core-js_shared__
// Dependencies: [13657]

// Module 13656 (__core-js_shared__)

export default (arg0, arg1) => {
  let tmp3 = require(13657) /* __core-js_shared__ */[arg0];
  if (!tmp3) {
    let obj = arg1;
    if (!arg1) {
      obj = {};
    }
    require(13657) /* __core-js_shared__ */[arg0] = obj;
    tmp3 = obj;
    const tmpResult = require(13657) /* __core-js_shared__ */;
  }
  return tmp3;
};
