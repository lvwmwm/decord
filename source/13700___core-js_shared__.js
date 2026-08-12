// Module ID: 13700
// Function ID: 13701
// Name: __core-js_shared__
// Dependencies: [13652, 13659]

// Module 13700 (__core-js_shared__)
let closure_2 = require("__core-js_shared__")("keys");

export default (arg0) => {
  let tmp2 = table[arg0];
  if (!tmp2) {
    const tmp5 = require(13659) /* sum */(arg0);
    tmp[arg0] = tmp5;
    tmp2 = tmp5;
  }
  return tmp2;
};
