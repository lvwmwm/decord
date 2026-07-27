// Module ID: 12847
// Function ID: 99965
// Name: inc
// Dependencies: [12839]

// Module 12847 (inc)

export default function inc(version) {
  let tmp2 = arg3;
  let tmp3 = arg4;
  if ("string" === typeof arg2) {
    tmp3 = tmp2;
    tmp2 = tmp;
  }
  let tmp4 = require(12839) /* SemVer */;
  tmp4 = new tmp4(version instanceof require(12839) /* SemVer */ ? version.version : version, tmp);
  return tmp4.inc(arg1, tmp2, tmp3).version;
};
