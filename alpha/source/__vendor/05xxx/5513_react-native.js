// Module ID: 5513
// Function ID: 5514
// Name: react-native
// Dependencies: [17]
// Exports: isRN083OrAbove

// Module 5513 (react-native)
import react_native from "react-native" /* 17 */;

const constants = react_native.Platform.constants;
let reactNativeVersion;
if (constants != null) {
  reactNativeVersion = constants.reactNativeVersion;
}

export const isRN083OrAbove = () => {
  let tmp2 = reactNativeVersion;
  if (tmp2) {
    tmp2 = tmp.major > 0 || tmp.minor >= 83;
    const tmp3 = tmp.major > 0 || tmp.minor >= 83;
  }
  return tmp2;
};
