// Module ID: 13652
// Function ID: 13653
// Name: __core-js_shared__
// Dependencies: [13653]

// Module 13652 (__core-js_shared__)

export default (arg0, arg1) => {
  let tmp3 = require(13653) /* __core-js_shared__ */[arg0];
  if (!tmp3) {
    let obj = arg1;
    if (!arg1) {
      obj = {};
    }
    require(13653) /* __core-js_shared__ */[arg0] = obj;
    tmp3 = obj;
    const tmpResult = require(13653) /* __core-js_shared__ */;
  }
  return tmp3;
};
