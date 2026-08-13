// Module ID: 5849
// Function ID: 5850
// Name: get ActivityIndicator
// Dependencies: [17]

// Module 5849 (get ActivityIndicator)
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
