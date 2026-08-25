// Module ID: 5572
// Function ID: 5573
// Name: PlatformConstants
// Dependencies: [17]

// Module 5572 (PlatformConstants)
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
