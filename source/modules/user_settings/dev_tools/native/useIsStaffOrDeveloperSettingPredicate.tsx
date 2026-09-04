// Module ID: 14767
// Function ID: 14768
// Name: useStaffOrDeveloperSettingPredicate
// Dependencies: [7653, 586, 2]
// Exports: useStaffOrDeveloperSettingPredicate

// Module 14767 (useStaffOrDeveloperSettingPredicate)
import initialize from "initialize" /* 586 */;
import closure_2 from "init" /* 7653 */;

require = arg1;
const result = require("set").fileFinishedImporting("modules/user_settings/dev_tools/native/useIsStaffOrDeveloperSettingPredicate.tsx");

export const useStaffOrDeveloperSettingPredicate = function useStaffOrDeveloperSettingPredicate() {
  const items = [closure_2];
  return initialize.useStateFromStores(items, () => isDeveloper.isDeveloper);
};
