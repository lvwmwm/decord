// Module ID: 6536
// Function ID: 6537
// Name: get ActivityIndicator
// Dependencies: [17]

// Module 6536 (get ActivityIndicator)
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
