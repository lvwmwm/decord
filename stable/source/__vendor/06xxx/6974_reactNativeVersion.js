// Module ID: 6974
// Function ID: 6975
// Name: reactNativeVersion
// Dependencies: [17]
// Exports: isRN083OrAbove

// Module 6974 (reactNativeVersion)
import _mod17 from "module_17" /* 17 */;

const constants = _mod17.Platform.constants;
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
