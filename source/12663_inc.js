// Module ID: 12663
// Function ID: 97323
// Name: inc
// Dependencies: [1862271025]

// Module 12663 (inc)

export default function inc(version) {
  let tmp2 = arg3;
  let tmp3 = arg4;
  if ("string" === typeof arg2) {
    tmp3 = tmp2;
    tmp2 = tmp;
  }
  let tmp4 = require(dependencyMap[0]);
  tmp4 = new tmp4(version instanceof require(dependencyMap[0]) ? version.version : version, tmp);
  return tmp4.inc(arg1, tmp2, tmp3).version;
};
