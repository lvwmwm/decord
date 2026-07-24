// Module ID: 5375
// Function ID: 46051
// Name: reactNativeVersion
// Dependencies: [27]
// Exports: isRN083OrAbove

// Module 5375 (reactNativeVersion)
const constants = require("get ActivityIndicator").Platform.constants;
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
