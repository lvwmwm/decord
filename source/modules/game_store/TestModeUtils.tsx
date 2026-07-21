// Module ID: 7363
// Function ID: 59337
// Name: isTestModeForApplication
// Dependencies: []
// Exports: isAnyApplicationInTestMode, isTestModeForApplication, useIsTestModeForApplication

// Module 7363 (isTestModeForApplication)
let closure_2 = importDefault(dependencyMap[0]);
let closure_3 = importDefault(dependencyMap[1]);
const result = arg1(dependencyMap[3]).fileFinishedImporting("modules/game_store/TestModeUtils.tsx");

export const isTestModeForApplication = function isTestModeForApplication(applicationId) {
  let result = closure_3.inTestModeForApplication(applicationId);
  if (!result) {
    result = closure_2.inDevModeForApplication(applicationId);
  }
  return result;
};
export const isAnyApplicationInTestMode = function isAnyApplicationInTestMode() {
  let isEnabled = null != closure_3.getTestModeApplicationId();
  if (!isEnabled) {
    isEnabled = closure_2.getIsEnabled();
  }
  return isEnabled;
};
export const useIsTestModeForApplication = function useIsTestModeForApplication(id) {
  const arg1 = id;
  const items = [closure_3, closure_2];
  const items1 = [id];
  return arg1(dependencyMap[2]).useStateFromStores(items, () => {
    let tmp = null != arg0;
    if (tmp) {
      let result = closure_3.inTestModeForApplication(arg0);
      if (!result) {
        result = closure_2.inDevModeForApplication(arg0);
      }
      tmp = result;
    }
    return tmp;
  }, items1);
};
