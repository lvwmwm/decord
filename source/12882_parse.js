// Module ID: 12882
// Function ID: 100110
// Name: parse
// Dependencies: [12883]

// Module 12882 (parse)

export default function parse(arg0, arg1) {
  if (arg0 instanceof require(12883) /* SemVer */) {
    return arg0;
  } else {
    let tmp4 = require(12883) /* SemVer */;
    const prototype = tmp4.prototype;
    tmp4 = new tmp4(arg0, arg1);
    return tmp4;
  }
};
