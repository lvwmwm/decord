// Module ID: 10510
// Function ID: 81330
// Name: getNonTestModeUrlForApplication
// Dependencies: [7372, 7370, 2]
// Exports: default

// Module 10510 (getNonTestModeUrlForApplication)
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import closure_1 from "_isNativeReflectConstruct";

function getNonTestModeUrlForApplication(arg0) {
  let combined = null;
  if (null != ACTIVITY_APPLICATION_HOST) {
    const _HermesInternal = HermesInternal;
    combined = "https://" + arg0 + "." + ACTIVITY_APPLICATION_HOST;
  }
  return combined;
}
function isUsingDevShelfActivityUrlOverride() {
  const state = store.getState();
  let useActivityUrlOverride = state.useActivityUrlOverride;
  if (useActivityUrlOverride) {
    useActivityUrlOverride = null != state.activityUrlOverride;
  }
  if (useActivityUrlOverride) {
    useActivityUrlOverride = "" !== state.activityUrlOverride;
  }
  return useActivityUrlOverride;
}
const result = require("set").fileFinishedImporting("modules/activities/getURLForApplication.tsx");

export default function getURLForApplication(arg0) {
  if (isUsingDevShelfActivityUrlOverride()) {
    let testModeOriginURL = store.getState().activityUrlOverride;
  } else if (_isNativeReflectConstruct.inTestModeForEmbeddedApplication(arg0)) {
    testModeOriginURL = _isNativeReflectConstruct.testModeOriginURL;
  } else {
    testModeOriginURL = getNonTestModeUrlForApplication(arg0);
  }
  return testModeOriginURL;
};
export { getNonTestModeUrlForApplication };
export { isUsingDevShelfActivityUrlOverride };
