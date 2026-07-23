// Module ID: 5245
// Function ID: 45283
// Name: PlatformConstants
// Dependencies: [27]

// Module 5245 (PlatformConstants)
import get_ActivityIndicator from "get ActivityIndicator";

const NativeModules = get_ActivityIndicator.NativeModules;
let PlatformConstants;
if (null != NativeModules) {
  PlatformConstants = NativeModules.PlatformConstants;
}
if (null == PlatformConstants) {
  PlatformConstants = get_ActivityIndicator.Platform.constants;
}

export default PlatformConstants;
