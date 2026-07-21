// Module ID: 12654
// Function ID: 97295
// Name: parse
// Dependencies: [1862271025]

// Module 12654 (parse)

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
