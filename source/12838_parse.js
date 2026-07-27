// Module ID: 12838
// Function ID: 99937
// Name: parse
// Dependencies: [12839]

// Module 12838 (parse)

export default function parse(arg0, arg1) {
  if (arg0 instanceof require(12839) /* SemVer */) {
    return arg0;
  } else {
    let tmp4 = require(12839) /* SemVer */;
    const prototype = tmp4.prototype;
    tmp4 = new tmp4(arg0, arg1);
    return tmp4;
  }
};
