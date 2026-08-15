// Module ID: 4414
// Function ID: 4415
// Name: ToString
// Dependencies: [540, 541]

// Module 4414 (ToString)
let closure_2 = require("getEvalledConstructor")("%String%");

export default function ToString(arg0) {
  if (typeof arg0 === "symbol") {
    const tmp5 = new require(541)("Cannot convert a Symbol value to a string");
    throw tmp5;
  } else {
    return callback(arg0);
  }
};
