// Module ID: 13357
// Function ID: 102246
// Name: __core-js_shared__
// Dependencies: [13309, 13316]

// Module 13357 (__core-js_shared__)
let closure_2 = require("__core-js_shared__")("keys");

export default (arg0) => {
  let tmp = table[arg0];
  if (!tmp) {
    const tmp5 = require(13316) /* sum */(arg0);
    table[arg0] = tmp5;
    tmp = tmp5;
  }
  return tmp;
};
