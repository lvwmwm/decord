// Module ID: 12788
// Function ID: 99520
// Name: patch
// Dependencies: [12776]

// Module 12788 (patch)

export default function patch(arg0, arg1) {
  let tmp = require(12776) /* SemVer */;
  tmp = new tmp(arg0, arg1);
  return tmp.patch;
};
