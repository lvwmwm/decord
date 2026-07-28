// Module ID: 12894
// Function ID: 100144
// Name: minor
// Dependencies: [12883]

// Module 12894 (minor)

export default function minor(arg0, arg1) {
  let tmp = require(12883) /* SemVer */;
  tmp = new tmp(arg0, arg1);
  return tmp.minor;
};
