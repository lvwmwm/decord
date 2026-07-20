// Module ID: 5020
// Function ID: 42846
// Name: PlatformConstants
// Dependencies: []

// Module 5020 (PlatformConstants)
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
