// Module ID: 12838
// Function ID: 99839
// Name: minor
// Dependencies: [12827]

// Module 12838 (minor)

export default function minor(arg0, arg1) {
  let tmp = require(12827) /* SemVer */;
  tmp = new tmp(arg0, arg1);
  return tmp.minor;
};
