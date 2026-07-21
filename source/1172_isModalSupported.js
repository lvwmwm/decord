// Module ID: 1172
// Function ID: 13338
// Name: isModalSupported
// Dependencies: []
// Exports: base64ToUint8Array, feedbackAlertDialog, isModalSupported, isNativeDriverSupportedForColorAnimations, isValidEmail

// Module 1172 (isModalSupported)
let closure_2 = importDefault(dependencyMap[0]);
const Alert = arg1(dependencyMap[1]).Alert;

export const isModalSupported = function isModalSupported() {
  const ReactNativeVersion = arg1(dependencyMap[2]).ReactNativeLibraries.ReactNativeVersion;
  let version;
  if (null !== ReactNativeVersion) {
    if (undefined !== ReactNativeVersion) {
      version = ReactNativeVersion.version;
    }
  }
  if (!version) {
    version = {};
  }
  const minor = version.minor;
  let isFabricEnabledResult = arg1(dependencyMap[3]).isFabricEnabled();
  if (isFabricEnabledResult) {
    isFabricEnabledResult = 0 === version.major;
  }
  if (isFabricEnabledResult) {
    isFabricEnabledResult = minor;
  }
  if (isFabricEnabledResult) {
    isFabricEnabledResult = minor < 71;
  }
  return !isFabricEnabledResult;
};
export const isNativeDriverSupportedForColorAnimations = function isNativeDriverSupportedForColorAnimations() {
  let major;
  let minor;
  const ReactNativeVersion = arg1(dependencyMap[2]).ReactNativeLibraries.ReactNativeVersion;
  let version;
  if (null !== ReactNativeVersion) {
    if (undefined !== ReactNativeVersion) {
      version = ReactNativeVersion.version;
    }
  }
  if (!version) {
    version = {};
  }
  ({ major, minor } = version);
  let flag = major;
  if (major) {
    flag = major > 0;
  }
  if (!flag) {
    let tmp = minor;
    if (minor) {
      tmp = minor >= 69;
    }
    flag = tmp;
  }
  if (!flag) {
    flag = false;
  }
  return flag;
};
export const isValidEmail = function isValidEmail(arr) {
  return /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(arr);
};
export const base64ToUint8Array = function base64ToUint8Array(base64) {
  if ("function" === typeof atob) {
    if (obj.isWeb()) {
      const _atob = atob;
      const _Uint8Array = Uint8Array;
      const uint8Array = new Uint8Array(callback(atob(base64)).map((str) => str.charCodeAt(0)));
      return uint8Array;
    }
    const obj = arg1(dependencyMap[3]);
  }
  const error = new Error("atob is not available in this environment.");
  throw error;
};
export const feedbackAlertDialog = function feedbackAlertDialog(errorTitle, captureScreenshotError) {
  if (obj.isWeb()) {
    if (undefined !== captureScreenshotError(dependencyMap[4]).RN_GLOBAL_OBJ.alert) {
      const RN_GLOBAL_OBJ = captureScreenshotError(dependencyMap[4]).RN_GLOBAL_OBJ;
      const _HermesInternal = HermesInternal;
      RN_GLOBAL_OBJ.alert("" + errorTitle + "\n" + captureScreenshotError);
    }
  }
  Alert.alert(errorTitle, captureScreenshotError);
};
