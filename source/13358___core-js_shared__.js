// Module ID: 13358
// Function ID: 102251
// Name: __core-js_shared__
// Dependencies: [13310, 13317]

// Module 13358 (__core-js_shared__)
let closure_2 = require("__core-js_shared__")("keys");

export default (arg0) => {
  let tmp = table[arg0];
  if (!tmp) {
    const tmp5 = require(13317) /* sum */(arg0);
    table[arg0] = tmp5;
    tmp = tmp5;
  }
  return tmp;
};
