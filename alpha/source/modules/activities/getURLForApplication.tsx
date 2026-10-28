// Module ID: 5659
// Function ID: 5660
// Name: getURLForApplication
// Dependencies: [32, 5660, 5661, 1383, 2]
// Exports: default, getApplicationRouterOrigin, getNonTestModeUrlForApplication, isUsingDevShelfActivityUrlOverride

// Module 5659 (getURLForApplication)
import URLUtilsDefault from "URLUtils" /* 1383 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import TestModeStore from "TestModeStore" /* 5660 */;
import DeveloperActivityShelfStore from "DeveloperActivityShelfStore" /* 5661 */;
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
export const getApplicationRouterOrigin = function getApplicationRouterOrigin(embeddedAppUrl) {
  const obj = URLUtilsDefault;
  const toURLSafeResult = obj.toURLSafe(embeddedAppUrl);
  if (null == toURLSafeResult) {
    return null;
  } else {
    const str4 = toURLSafeResult.hostname;
    const str6 = _slicedToArray(str4.split(".", 1), 1)[0];
    const first = _slicedToArray(str6.split("--", 1), 1)[0];
    const _window3 = window;
    let origin = null;
    if (null != ACTIVITY_APPLICATION_HOST) {
      if (ACTIVITY_APPLICATION_HOST.startsWith("//")) {
        const _URL = URL;
        const _window = window;
        const _window2 = window;
        const _HermesInternal2 = HermesInternal;
        const self = this;
        const self2 = this;
        const uRL = new URL(ACTIVITY_APPLICATION_HOST, "" + window.location.protocol + "//" + window.location.host);
        const _HermesInternal3 = HermesInternal;
        uRL.hostname = "" + first + "." + uRL.hostname;
        origin = uRL.origin;
      } else {
        const _HermesInternal = HermesInternal;
        origin = "https://" + first + "." + ACTIVITY_APPLICATION_HOST;
      }
    }
    let origin2 = null;
    if (null != origin) {
      const tmpResult = URLUtilsDefault;
      const toURLSafeResult1 = tmpResult.toURLSafe(origin);
      let origin1;
      if (toURLSafeResult1 != null) {
        origin1 = toURLSafeResult1.origin;
      }
      origin2 = null;
      if (origin1 === toURLSafeResult.origin) {
        origin2 = toURLSafeResult.origin;
      }
    }
    return origin2;
  }
};
export const isUsingDevShelfActivityUrlOverride = function isUsingDevShelfActivityUrlOverride() {
  const state = DeveloperActivityShelfStore.getState();
  const useActivityUrlOverride = state.useActivityUrlOverride && null != state.activityUrlOverride && "" !== state.activityUrlOverride;
  return useActivityUrlOverride;
};
