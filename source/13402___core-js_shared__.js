// Module ID: 13402
// Function ID: 102424
// Name: __core-js_shared__
// Dependencies: [13354, 13361]

// Module 13402 (__core-js_shared__)
let closure_2 = require("__core-js_shared__")("keys");

export default (arg0) => {
  let tmp = table[arg0];
  if (!tmp) {
    const tmp5 = require(13361) /* sum */(arg0);
    table[arg0] = tmp5;
    tmp = tmp5;
  }
  return tmp;
};
