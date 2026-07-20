// Module ID: 10464
// Function ID: 81041
// Name: getNonTestModeUrlForApplication
// Dependencies: []
// Exports: default

// Module 10464 (getNonTestModeUrlForApplication)
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
let closure_0 = importDefault(dependencyMap[0]);
let closure_1 = importDefault(dependencyMap[1]);
const result = arg1(dependencyMap[2]).fileFinishedImporting("modules/activities/getURLForApplication.tsx");

export default function getURLForApplication(arg0) {
  if (isUsingDevShelfActivityUrlOverride()) {
    let testModeOriginURL = store.getState().activityUrlOverride;
  } else if (closure_0.inTestModeForEmbeddedApplication(arg0)) {
    testModeOriginURL = closure_0.testModeOriginURL;
  } else {
    testModeOriginURL = getNonTestModeUrlForApplication(arg0);
  }
  return testModeOriginURL;
};
export { getNonTestModeUrlForApplication };
export { isUsingDevShelfActivityUrlOverride };
