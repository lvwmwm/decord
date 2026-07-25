// Module ID: 12837
// Function ID: 99932
// Name: parse
// Dependencies: [12838]

// Module 12837 (parse)

export default function parse(arg0, arg1) {
  if (arg0 instanceof require(12838) /* SemVer */) {
    return arg0;
  } else {
    let tmp4 = require(12838) /* SemVer */;
    const prototype = tmp4.prototype;
    tmp4 = new tmp4(arg0, arg1);
    return tmp4;
  }
};
