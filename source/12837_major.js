// Module ID: 12837
// Function ID: 99837
// Name: major
// Dependencies: [12827]

// Module 12837 (major)

export default function major(arg0, arg1) {
  let tmp = require(12827) /* SemVer */;
  tmp = new tmp(arg0, arg1);
  return tmp.major;
};
