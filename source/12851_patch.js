// Module ID: 12851
// Function ID: 99973
// Name: patch
// Dependencies: [12839]

// Module 12851 (patch)

export default function patch(arg0, arg1) {
  let tmp = require(12839) /* SemVer */;
  tmp = new tmp(arg0, arg1);
  return tmp.patch;
};
