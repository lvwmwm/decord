// Module ID: 12787
// Function ID: 99518
// Name: minor
// Dependencies: [12776]

// Module 12787 (minor)

export default function minor(arg0, arg1) {
  let tmp = require(12776) /* SemVer */;
  tmp = new tmp(arg0, arg1);
  return tmp.minor;
};
