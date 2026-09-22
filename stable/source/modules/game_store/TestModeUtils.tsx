// Module ID: 8979
// Function ID: 8980
// Name: TestModeUtils
// Dependencies: [8980, 8982, 504, 2]
// Exports: isAnyApplicationInTestMode, isTestModeForApplication, useIsTestModeForApplication

// Module 8979 (TestModeUtils)
import DeveloperActivityShelfStore from "DeveloperActivityShelfStore" /* 8980 */;
import TestModeStore from "TestModeStore" /* 8982 */;

const require = globalThis.__r;

const require = fn;
const size = fn(2);
let result = size.fileFinishedImporting("modules/game_store/TestModeUtils.tsx");

export const isTestModeForApplication = function isTestModeForApplication(applicationId) {
  let result = TestModeStore.inTestModeForApplication(applicationId);
  if (!result) {
    result = DeveloperActivityShelfStore.inDevModeForApplication(applicationId);
  }
  return result;
};
export const isAnyApplicationInTestMode = function isAnyApplicationInTestMode() {
  let isEnabled = null != TestModeStore.getTestModeApplicationId();
  if (!isEnabled) {
    isEnabled = DeveloperActivityShelfStore.getIsEnabled();
  }
  return isEnabled;
};
export const useIsTestModeForApplication = function useIsTestModeForApplication(id) {
  _require = id;
  const items = [TestModeStore, DeveloperActivityShelfStore];
  const items1 = [id];
  return require("initialize").useStateFromStores(items, () => {
    let tmp2 = null != closure_0;
    if (tmp2) {
      let result = TestModeStore.inTestModeForApplication(tmp);
      if (!result) {
        result = DeveloperActivityShelfStore.inDevModeForApplication(tmp);
      }
      tmp2 = result;
    }
    return tmp2;
  }, items1);
};
