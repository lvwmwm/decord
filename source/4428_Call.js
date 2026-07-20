// Module ID: 4428
// Function ID: 38831
// Name: Call
// Dependencies: []

// Module 4428 (Call)
let tmp = require(dependencyMap[0])("%Reflect.apply%", true);
if (!tmp) {
  tmp = require(dependencyMap[1])("Function.prototype.apply");
}

export default function Call(arg0, arg1) {
  const tmp = arguments.length > 2 ? arguments[2] : [];
  if (require(dependencyMap[2])(tmp)) {
    return tmp(arg0, arg1, tmp);
  } else {
    let tmp4 = require(dependencyMap[3]);
    const prototype = tmp4.prototype;
    tmp4 = new tmp4("Assertion failed: optional `argumentsList`, if provided, must be a List");
    throw tmp4;
  }
};
