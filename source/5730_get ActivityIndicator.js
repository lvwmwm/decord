// Module ID: 5730
// Function ID: 5731
// Name: get ActivityIndicator
// Dependencies: [17]

// Module 5730 (get ActivityIndicator)
const constants = require("get ActivityIndicator").Platform.constants;
if (constants != null) {
  const reactNativeVersion = constants.reactNativeVersion;
}
try {
  let major;
  if (reactNativeVersion != null) {
    major = reactNativeVersion.major;
  }
  if (0 !== major) {
    const InteractionManager = require("get ActivityIndicator").InteractionManager;
  }
  exports.InteractionManager = InteractionManager;
} catch (err) {
}
