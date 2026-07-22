// Module ID: 4384
// Function ID: 38795
// Name: ToNumber
// Dependencies: []

// Module 4384 (ToNumber)
let closure_2 = require(dependencyMap[0])("%Number%");

export default function ToNumber(arg0) {
  let tmp = arg0;
  if (!require(dependencyMap[1])(arg0)) {
    tmp = require(dependencyMap[2])(arg0, closure_2);
  }
  if ("symbol" === typeof tmp) {
    let tmp18 = require(dependencyMap[3]);
    const prototype2 = tmp18.prototype;
    tmp18 = new tmp18("Cannot convert a Symbol value to a number");
    throw tmp18;
  } else if ("bigint" === tmp5) {
    let tmp11 = require(dependencyMap[3]);
    const prototype = tmp11.prototype;
    tmp11 = new tmp11("Conversion from 'BigInt' to 'number' is not allowed.");
    throw tmp11;
  } else {
    if ("string" === tmp5) {
      let tmp6 = require(dependencyMap[4])(tmp);
    } else {
      tmp6 = +tmp;
    }
    return tmp6;
  }
};
