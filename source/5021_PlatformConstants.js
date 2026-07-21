// Module ID: 5021
// Function ID: 42894
// Name: PlatformConstants
// Dependencies: []

// Module 5021 (PlatformConstants)
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
