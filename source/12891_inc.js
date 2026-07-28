// Module ID: 12891
// Function ID: 100138
// Name: inc
// Dependencies: [12883]

// Module 12891 (inc)

export default function inc(version) {
  let tmp2 = arg3;
  let tmp3 = arg4;
  if ("string" === typeof arg2) {
    tmp3 = tmp2;
    tmp2 = tmp;
  }
  let tmp4 = require(12883) /* SemVer */;
  tmp4 = new tmp4(version instanceof require(12883) /* SemVer */ ? version.version : version, tmp);
  return tmp4.inc(arg1, tmp2, tmp3).version;
};
