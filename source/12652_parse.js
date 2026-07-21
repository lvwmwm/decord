// Module ID: 12652
// Function ID: 97273
// Name: parse
// Dependencies: []

// Module 12652 (parse)

export default function parse(arg0, arg1) {
  if (arg0 instanceof require(dependencyMap[0])) {
    return arg0;
  } else {
    let tmp4 = require(dependencyMap[0]);
    const prototype = tmp4.prototype;
    tmp4 = new tmp4(arg0, arg1);
    return tmp4;
  }
};
