// Module ID: 4399
// Function ID: 38850
// Name: ToString
// Dependencies: [517, 518]

// Module 4399 (ToString)
let closure_2 = require("getEvalledConstructor")("%String%");

export default function ToString(arg0) {
  if ("symbol" === typeof arg0) {
    let tmp4 = require(518);
    const prototype = tmp4.prototype;
    tmp4 = new tmp4("Cannot convert a Symbol value to a string");
    throw tmp4;
  } else {
    return callback(arg0);
  }
};
