// Module ID: 14381
// Function ID: 14382
// Name: useStaffOrDeveloperSettingPredicate
// Dependencies: [7412, 589, 2]
// Exports: useStaffOrDeveloperSettingPredicate

// Module 14381 (useStaffOrDeveloperSettingPredicate)
import initialize from "initialize" /* 589 */;
import closure_2 from "init" /* 7412 */;

require = arg1;
const result = require("set").fileFinishedImporting("modules/user_settings/dev_tools/native/useIsStaffOrDeveloperSettingPredicate.tsx");

export const useStaffOrDeveloperSettingPredicate = function useStaffOrDeveloperSettingPredicate() {
  const items = [closure_2];
  return initialize.useStateFromStores(items, () => isDeveloper.isDeveloper);
};
