// Module ID: 13501
// Function ID: 13502
// Name: __core-js_shared__
// Dependencies: [13502]

// Module 13501 (__core-js_shared__)

export default (arg0, arg1) => {
  let tmp3 = require(13502) /* __core-js_shared__ */[arg0];
  if (!tmp3) {
    let obj = arg1;
    if (!arg1) {
      obj = {};
    }
    require(13502) /* __core-js_shared__ */[arg0] = obj;
    tmp3 = obj;
    const tmpResult = require(13502) /* __core-js_shared__ */;
  }
  return tmp3;
};
