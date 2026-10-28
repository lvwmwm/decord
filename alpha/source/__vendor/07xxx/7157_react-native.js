// Module ID: 7157
// Function ID: 7158
// Name: react-native
// Dependencies: [17]

// Module 7157 (react-native)
import react_native from "react-native" /* 17 */;

let reactNativeVersion;
let tmp;
const constants = react_native.Platform.constants;
if (constants != null) {
  reactNativeVersion = constants.reactNativeVersion;
}
try {
  let InteractionManager;
  let major;
  if (reactNativeVersion != null) {
    major = reactNativeVersion.major;
  }
  if (0 !== major) {
    InteractionManager = react_native.InteractionManager;
  }
  tmp = InteractionManager;
} catch (err) {
}
const InteractionManager_export = tmp;

export { InteractionManager_export as InteractionManager };
