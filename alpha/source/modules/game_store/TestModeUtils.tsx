// Module ID: 9645
// Function ID: 9646
// Name: TestModeUtils
// Dependencies: [5798, 5797, 504, 2]
// Exports: isAnyApplicationInTestMode, isTestModeForApplication, useIsTestModeForApplication

// Module 9645 (TestModeUtils)
import DeveloperActivityShelfStore from "DeveloperActivityShelfStore" /* 5798 */;
import TestModeStore from "TestModeStore" /* 5797 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require;

let result = size.fileFinishedImporting("modules/game_store/TestModeUtils.tsx");

export function isTestModeForApplication(applicationId) {
  const result = TestModeStore.inTestModeForApplication(applicationId) || DeveloperActivityShelfStore.inDevModeForApplication(applicationId);
  return result;
}
export function isAnyApplicationInTestMode() {
  const isEnabled = null != TestModeStore.getTestModeApplicationId() || DeveloperActivityShelfStore.getIsEnabled();
  return isEnabled;
}
export function useIsTestModeForApplication(id) {
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
}
