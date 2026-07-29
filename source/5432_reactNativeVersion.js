// Module ID: 5432
// Function ID: 5433
// Name: reactNativeVersion
// Dependencies: [17]
// Exports: isRN083OrAbove

// Module 5432 (reactNativeVersion)
const constants = require("get ActivityIndicator").Platform.constants;
let reactNativeVersion;
if (constants != null) {
  reactNativeVersion = constants.reactNativeVersion;
}

export const isRN083OrAbove = () => {
  let tmp2 = reactNativeVersion;
  if (reactNativeVersion) {
    let tmp3 = tmp.major > 0;
    if (!tmp3) {
      tmp3 = tmp.minor >= 83;
    }
    tmp2 = tmp3;
  }
  return tmp2;
};
