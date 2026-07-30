// Module ID: 13420
// Function ID: 13421
// Name: __core-js_shared__
// Dependencies: [13372, 13379]

// Module 13420 (__core-js_shared__)
let closure_2 = require("__core-js_shared__")("keys");

export default (arg0) => {
  let tmp2 = table[arg0];
  if (!tmp2) {
    const tmp5 = require(13379) /* sum */(arg0);
    tmp[arg0] = tmp5;
    tmp2 = tmp5;
  }
  return tmp2;
};
