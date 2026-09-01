// Module ID: 14448
// Function ID: 14449
// Name: useStaffOrDeveloperSettingPredicate
// Dependencies: [7465, 589, 2]
// Exports: useStaffOrDeveloperSettingPredicate

// Module 14448 (useStaffOrDeveloperSettingPredicate)
import initialize from "initialize" /* 589 */;
import closure_2 from "init" /* 7465 */;

require = arg1;
const result = require("set").fileFinishedImporting("modules/user_settings/dev_tools/native/useIsStaffOrDeveloperSettingPredicate.tsx");

export const useStaffOrDeveloperSettingPredicate = function useStaffOrDeveloperSettingPredicate() {
  const items = [closure_2];
  return initialize.useStateFromStores(items, () => isDeveloper.isDeveloper);
};
