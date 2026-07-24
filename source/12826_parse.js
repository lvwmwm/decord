// Module ID: 12826
// Function ID: 99805
// Name: parse
// Dependencies: [12827]

// Module 12826 (parse)

export default function parse(arg0, arg1) {
  if (arg0 instanceof require(12827) /* SemVer */) {
    return arg0;
  } else {
    let tmp4 = require(12827) /* SemVer */;
    const prototype = tmp4.prototype;
    tmp4 = new tmp4(arg0, arg1);
    return tmp4;
  }
};
