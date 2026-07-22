// Module ID: 5242
// Function ID: 45264
// Name: PlatformConstants
// Dependencies: []

// Module 5242 (PlatformConstants)
const _module = require(dependencyMap[0]);
const NativeModules = _module.NativeModules;
let PlatformConstants;
if (null != NativeModules) {
  PlatformConstants = NativeModules.PlatformConstants;
}
if (null == PlatformConstants) {
  PlatformConstants = _module.Platform.constants;
}

export default PlatformConstants;
