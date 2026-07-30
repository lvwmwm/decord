// Module ID: 13372
// Function ID: 13373
// Name: __core-js_shared__
// Dependencies: [13373]

// Module 13372 (__core-js_shared__)

export default (arg0, arg1) => {
  let tmp3 = require(13373) /* __core-js_shared__ */[arg0];
  if (!tmp3) {
    let obj = arg1;
    if (!arg1) {
      obj = {};
    }
    require(13373) /* __core-js_shared__ */[arg0] = obj;
    tmp3 = obj;
    const tmpResult = require(13373) /* __core-js_shared__ */;
  }
  return tmp3;
};
