// Module ID: 13293
// Function ID: 101792
// Name: __core-js_shared__
// Dependencies: [13245, 13252]

// Module 13293 (__core-js_shared__)
let closure_2 = require("__core-js_shared__")("keys");

export default (arg0) => {
  let tmp = table[arg0];
  if (!tmp) {
    const tmp5 = require(13252) /* sum */(arg0);
    table[arg0] = tmp5;
    tmp = tmp5;
  }
  return tmp;
};
