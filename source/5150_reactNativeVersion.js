// Module ID: 5150
// Function ID: 43609
// Name: reactNativeVersion
// Dependencies: []
// Exports: isRN083OrAbove

// Module 5150 (reactNativeVersion)
const constants = require(dependencyMap[0]).Platform.constants;
let reactNativeVersion;
if (null != constants) {
  reactNativeVersion = constants.reactNativeVersion;
}

export const isRN083OrAbove = function isRN083OrAbove() {
  let tmp = reactNativeVersion;
  if (reactNativeVersion) {
    let tmp3 = reactNativeVersion.major > 0;
    if (!tmp3) {
      tmp3 = reactNativeVersion.minor >= 83;
    }
    tmp = tmp3;
  }
  return tmp;
};
