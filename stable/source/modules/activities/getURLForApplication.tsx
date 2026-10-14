// Module ID: 8706
// Function ID: 8707
// Name: getURLForApplication
// Dependencies: [8515, 8513, 2]
// Exports: default, getNonTestModeUrlForApplication, isUsingDevShelfActivityUrlOverride

// Module 8706 (getURLForApplication)
import TestModeStore from "TestModeStore" /* 8515 */;
import DeveloperActivityShelfStore from "DeveloperActivityShelfStore" /* 8513 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/activities/getURLForApplication.tsx");

export default function getURLForApplication(arg0) {
  let activityUrlOverride;
  const state = DeveloperActivityShelfStore.getState();
  let useActivityUrlOverride = state.useActivityUrlOverride;
  const obj = DeveloperActivityShelfStore;
  if (useActivityUrlOverride) {
    useActivityUrlOverride = null != state.activityUrlOverride;
  }
  if (useActivityUrlOverride) {
    useActivityUrlOverride = "" !== state.activityUrlOverride;
  }
  if (useActivityUrlOverride) {
    activityUrlOverride = obj.getState().activityUrlOverride;
  } else {
    const tmp4 = TestModeStore;
    if (TestModeStore.inTestModeForEmbeddedApplication(arg0)) {
      activityUrlOverride = tmp4.testModeOriginURL;
    } else {
      const _window = window;
      activityUrlOverride = null;
      if (null != ACTIVITY_APPLICATION_HOST) {
        if (ACTIVITY_APPLICATION_HOST.startsWith("//")) {
          const _URL = URL;
          const _window2 = window;
          const _window3 = window;
          const _HermesInternal2 = HermesInternal;
          const self = this;
          const self2 = this;
          const uRL = new URL(ACTIVITY_APPLICATION_HOST, "" + window.location.protocol + "//" + window.location.host);
          const _HermesInternal3 = HermesInternal;
          uRL.hostname = "" + arg0 + "." + uRL.hostname;
          activityUrlOverride = uRL.origin;
        } else {
          const _HermesInternal = HermesInternal;
          activityUrlOverride = "https://" + arg0 + "." + ACTIVITY_APPLICATION_HOST;
        }
      }
    }
  }
  return activityUrlOverride;
};
export const getNonTestModeUrlForApplication = function getNonTestModeUrlForApplication(arg0) {
  if (null == ACTIVITY_APPLICATION_HOST) {
    return null;
  } else if (ACTIVITY_APPLICATION_HOST.startsWith("//")) {
    const _URL = URL;
    const _window = window;
    const _window2 = window;
    const _HermesInternal2 = HermesInternal;
    const self = this;
    const self2 = this;
    const uRL = new URL(ACTIVITY_APPLICATION_HOST, "" + window.location.protocol + "//" + window.location.host);
    const _HermesInternal3 = HermesInternal;
    uRL.hostname = "" + arg0 + "." + uRL.hostname;
    return uRL.origin;
  } else {
    const _HermesInternal = HermesInternal;
    return "https://" + arg0 + "." + ACTIVITY_APPLICATION_HOST;
  }
};
export const isUsingDevShelfActivityUrlOverride = function isUsingDevShelfActivityUrlOverride() {
  const state = DeveloperActivityShelfStore.getState();
  const useActivityUrlOverride = state.useActivityUrlOverride && null != state.activityUrlOverride && "" !== state.activityUrlOverride;
  return useActivityUrlOverride;
};
