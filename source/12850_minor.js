// Module ID: 12850
// Function ID: 99971
// Name: minor
// Dependencies: [12839]

// Module 12850 (minor)

export default function minor(arg0, arg1) {
  let tmp = require(12839) /* SemVer */;
  tmp = new tmp(arg0, arg1);
  return tmp.minor;
};
