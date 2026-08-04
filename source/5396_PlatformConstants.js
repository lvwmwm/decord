// Module ID: 5396
// Function ID: 5397
// Name: PlatformConstants
// Dependencies: [17]

// Module 5396 (PlatformConstants)
import get_ActivityIndicator from "get ActivityIndicator";

const NativeModules = get_ActivityIndicator.NativeModules;
let PlatformConstants;
if (NativeModules != null) {
  PlatformConstants = NativeModules.PlatformConstants;
}
if (PlatformConstants == null) {
  PlatformConstants = get_ActivityIndicator.Platform.constants;
}

export default PlatformConstants;
