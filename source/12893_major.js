// Module ID: 12893
// Function ID: 100142
// Name: major
// Dependencies: [12883]

// Module 12893 (major)

export default function major(arg0, arg1) {
  let tmp = require(12883) /* SemVer */;
  tmp = new tmp(arg0, arg1);
  return tmp.major;
};
