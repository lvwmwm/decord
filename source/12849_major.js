// Module ID: 12849
// Function ID: 99969
// Name: major
// Dependencies: [12839]

// Module 12849 (major)

export default function major(arg0, arg1) {
  let tmp = require(12839) /* SemVer */;
  tmp = new tmp(arg0, arg1);
  return tmp.major;
};
