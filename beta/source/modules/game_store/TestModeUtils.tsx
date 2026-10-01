// Module ID: 8319
// Function ID: 8320
// Name: TestModeUtils
// Dependencies: [8320, 8322, 504, 2]
// Exports: isAnyApplicationInTestMode, isTestModeForApplication, useIsTestModeForApplication

// Module 8319 (TestModeUtils)
import DeveloperActivityShelfStore from "DeveloperActivityShelfStore" /* 8320 */;
import TestModeStore from "TestModeStore" /* 8322 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require;

let result = size.fileFinishedImporting("modules/game_store/TestModeUtils.tsx");

export const isTestModeForApplication = function isTestModeForApplication(applicationId) {
  const result = TestModeStore.inTestModeForApplication(applicationId) || DeveloperActivityShelfStore.inDevModeForApplication(applicationId);
  return result;
};
export const isAnyApplicationInTestMode = function isAnyApplicationInTestMode() {
  const isEnabled = null != TestModeStore.getTestModeApplicationId() || DeveloperActivityShelfStore.getIsEnabled();
  return isEnabled;
};
export const useIsTestModeForApplication = function useIsTestModeForApplication(id) {
  _require = id;
  const items = [TestModeStore, DeveloperActivityShelfStore];
  const items1 = [id];
  const obj = require("get initialized");
  return obj.useStateFromStores(items, () => {
    let tmp2 = null != id;
    if (tmp2) {
      const result = TestModeStore.inTestModeForApplication(tmp) || DeveloperActivityShelfStore.inDevModeForApplication(tmp);
      tmp2 = result;
    }
    return tmp2;
  }, items1);
};
