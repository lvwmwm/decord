// Module ID: 12786
// Function ID: 99516
// Name: major
// Dependencies: [12776]

// Module 12786 (major)

export default function major(arg0, arg1) {
  let tmp = require(12776) /* SemVer */;
  tmp = new tmp(arg0, arg1);
  return tmp.major;
};
