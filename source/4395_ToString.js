// Module ID: 4395
// Function ID: 38818
// Name: ToString
// Dependencies: []

// Module 4395 (ToString)
let closure_2 = require(dependencyMap[0])("%String%");

export default function ToString(arg0) {
  if ("symbol" === typeof arg0) {
    let tmp4 = require(dependencyMap[1]);
    const prototype = tmp4.prototype;
    tmp4 = new tmp4("Cannot convert a Symbol value to a string");
    throw tmp4;
  } else {
    return callback(arg0);
  }
};
