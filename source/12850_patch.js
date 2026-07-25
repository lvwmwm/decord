// Module ID: 12850
// Function ID: 99968
// Name: patch
// Dependencies: [12838]

// Module 12850 (patch)

export default function patch(arg0, arg1) {
  let tmp = require(12838) /* SemVer */;
  tmp = new tmp(arg0, arg1);
  return tmp.patch;
};
