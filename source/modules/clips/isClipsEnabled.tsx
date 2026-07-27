// Module ID: 4189
// Function ID: 36057
// Name: isClipsEnabled
// Dependencies: [4184, 4190, 4194, 566, 477, 2]
// Exports: isDecoupledClipsEnabled, useIsDecoupledClipsEnabled

// Module 4189 (isClipsEnabled)
import _isNativeReflectConstruct from "_isNativeReflectConstruct";

const require = arg1;
function isClipsEnabled() {
  let clipsEnabled = require(4190) /* isUserPremiumTypeForClipsEarlyAccess */.areClipsAvailable();
  if (clipsEnabled) {
    clipsEnabled = store.getState().clipsSettings.clipsEnabled;
  }
  if (clipsEnabled) {
    let decoupledClipsEnabled = !require(4194) /* useIsClipsSettingsRedesignEnabled */.isClipsSettingsRedesignEnabled();
    if (!decoupledClipsEnabled) {
      decoupledClipsEnabled = store.getState().clipsSettings.decoupledClipsEnabled;
    }
    clipsEnabled = decoupledClipsEnabled;
    const obj2 = require(4194) /* useIsClipsSettingsRedesignEnabled */;
  }
  return clipsEnabled;
}
function useIsClipsEnabled() {
  let isClipsAvailable = require(4190) /* isUserPremiumTypeForClipsEarlyAccess */.useIsClipsAvailable();
  const obj = require(4190) /* isUserPremiumTypeForClipsEarlyAccess */;
  const items = [_isNativeReflectConstruct];
  const stateFromStores = require(566) /* initialize */.useStateFromStores(items, () => outer1_2.getState().clipsSettings.clipsEnabled);
  const obj2 = require(566) /* initialize */;
  const isClipsSettingsRedesignEnabled = require(4194) /* useIsClipsSettingsRedesignEnabled */.useIsClipsSettingsRedesignEnabled();
  const obj3 = require(4194) /* useIsClipsSettingsRedesignEnabled */;
  const items1 = [_isNativeReflectConstruct];
  const stateFromStores1 = require(566) /* initialize */.useStateFromStores(items1, () => outer1_2.getState().clipsSettings.decoupledClipsEnabled);
  if (isClipsAvailable) {
    isClipsAvailable = stateFromStores;
  }
  if (isClipsAvailable) {
    isClipsAvailable = !isClipsSettingsRedesignEnabled || stateFromStores1;
    const tmp5 = !isClipsSettingsRedesignEnabled || stateFromStores1;
  }
  return isClipsAvailable;
}
const result = require("useIsClipsSettingsRedesignEnabled").fileFinishedImporting("modules/clips/isClipsEnabled.tsx");

export { isClipsEnabled };
export { useIsClipsEnabled };
export const isDecoupledClipsEnabled = function isDecoupledClipsEnabled() {
  let tmp = isClipsEnabled();
  const isWindowsResult = require(477) /* set */.isWindows();
  const obj = require(477) /* set */;
  if (obj2.isClipsSettingsRedesignEnabled()) {
    if (tmp) {
      tmp = isWindowsResult;
    }
    return tmp;
  } else {
    let decoupledClipsEnabled = tmp;
    if (tmp) {
      decoupledClipsEnabled = isWindowsResult;
    }
    if (decoupledClipsEnabled) {
      decoupledClipsEnabled = store.getState().clipsSettings.decoupledClipsEnabled;
    }
    return decoupledClipsEnabled;
  }
  obj2 = require(4194) /* useIsClipsSettingsRedesignEnabled */;
};
export const useIsDecoupledClipsEnabled = function useIsDecoupledClipsEnabled() {
  let tmp = useIsClipsEnabled();
  const isWindowsResult = require(477) /* set */.isWindows();
  const obj = require(477) /* set */;
  const items = [_isNativeReflectConstruct];
  const stateFromStores = require(566) /* initialize */.useStateFromStores(items, () => outer1_2.getState().clipsSettings.decoupledClipsEnabled);
  const obj2 = require(566) /* initialize */;
  if (obj3.useIsClipsSettingsRedesignEnabled()) {
    if (tmp) {
      tmp = isWindowsResult;
    }
    let tmp4 = tmp;
  } else {
    tmp4 = tmp;
    if (tmp) {
      tmp4 = isWindowsResult;
    }
    if (tmp4) {
      tmp4 = stateFromStores;
    }
  }
  return tmp4;
};
