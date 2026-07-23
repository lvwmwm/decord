// Module ID: 7369
// Function ID: 59394
// Name: isTestModeForApplication
// Dependencies: [7370, 7372, 566, 2]
// Exports: isAnyApplicationInTestMode, isTestModeForApplication, useIsTestModeForApplication

// Module 7369 (isTestModeForApplication)
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import closure_3 from "_isNativeReflectConstruct";

const require = arg1;
let result = require("initialize").fileFinishedImporting("modules/game_store/TestModeUtils.tsx");

export const isTestModeForApplication = function isTestModeForApplication(applicationId) {
  let result = closure_3.inTestModeForApplication(applicationId);
  if (!result) {
    result = _isNativeReflectConstruct.inDevModeForApplication(applicationId);
  }
  return result;
};
export const isAnyApplicationInTestMode = function isAnyApplicationInTestMode() {
  let isEnabled = null != closure_3.getTestModeApplicationId();
  if (!isEnabled) {
    isEnabled = _isNativeReflectConstruct.getIsEnabled();
  }
  return isEnabled;
};
export const useIsTestModeForApplication = function useIsTestModeForApplication(id) {
  const _require = id;
  const items = [closure_3, _isNativeReflectConstruct];
  const items1 = [id];
  return _require(566).useStateFromStores(items, () => {
    let tmp = null != closure_0;
    if (tmp) {
      let result = outer1_3.inTestModeForApplication(closure_0);
      if (!result) {
        result = outer1_2.inDevModeForApplication(closure_0);
      }
      tmp = result;
    }
    return tmp;
  }, items1);
};
