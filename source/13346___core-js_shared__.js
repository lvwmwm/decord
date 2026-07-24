// Module ID: 13346
// Function ID: 102119
// Name: __core-js_shared__
// Dependencies: [13298, 13305]

// Module 13346 (__core-js_shared__)
let closure_2 = require("__core-js_shared__")("keys");

export default (arg0) => {
  let tmp = table[arg0];
  if (!tmp) {
    const tmp5 = require(13305) /* sum */(arg0);
    table[arg0] = tmp5;
    tmp = tmp5;
  }
  return tmp;
};
