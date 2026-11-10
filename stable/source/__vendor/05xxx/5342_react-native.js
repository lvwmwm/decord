// Module ID: 5342
// Function ID: 5343
// Name: react-native
// Dependencies: [17]

// Module 5342 (react-native)
import react_native from "react-native" /* 17 */;

const NativeModules = react_native.NativeModules;
let PlatformConstants;
const Platform = react_native.Platform;
if (NativeModules != null) {
  PlatformConstants = NativeModules.PlatformConstants;
}
if (PlatformConstants == null) {
  PlatformConstants = Platform.constants;
}

export default PlatformConstants;
