// Module ID: 12849
// Function ID: 99966
// Name: minor
// Dependencies: [12838]

// Module 12849 (minor)

export default function minor(arg0, arg1) {
  let tmp = require(12838) /* SemVer */;
  tmp = new tmp(arg0, arg1);
  return tmp.minor;
};
