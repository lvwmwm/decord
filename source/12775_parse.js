// Module ID: 12775
// Function ID: 99484
// Name: parse
// Dependencies: [12776]

// Module 12775 (parse)

export default function parse(arg0, arg1) {
  if (arg0 instanceof require(12776) /* SemVer */) {
    return arg0;
  } else {
    let tmp4 = require(12776) /* SemVer */;
    const prototype = tmp4.prototype;
    tmp4 = new tmp4(arg0, arg1);
    return tmp4;
  }
};
