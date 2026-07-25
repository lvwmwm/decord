// Module ID: 12848
// Function ID: 99964
// Name: major
// Dependencies: [12838]

// Module 12848 (major)

export default function major(arg0, arg1) {
  let tmp = require(12838) /* SemVer */;
  tmp = new tmp(arg0, arg1);
  return tmp.major;
};
