// Module ID: 5699
// Function ID: 5700
// Name: PlatformConstants
// Dependencies: [17]

// Module 5699 (PlatformConstants)
import get_ActivityIndicator from "get ActivityIndicator" /* 17 */;

const NativeModules = get_ActivityIndicator.NativeModules;
let PlatformConstants;
if (NativeModules != null) {
  PlatformConstants = NativeModules.PlatformConstants;
}
if (PlatformConstants == null) {
  PlatformConstants = get_ActivityIndicator.Platform.constants;
}

export default PlatformConstants;
