// Module ID: 14686
// Function ID: 14687
// Name: useStaffOrDeveloperSettingPredicate
// Dependencies: [7476, 586, 2]
// Exports: useStaffOrDeveloperSettingPredicate

// Module 14686 (useStaffOrDeveloperSettingPredicate)
import initialize from "initialize" /* 586 */;
import closure_2 from "init" /* 7476 */;

require = arg1;
const result = require("set").fileFinishedImporting("modules/user_settings/dev_tools/native/useIsStaffOrDeveloperSettingPredicate.tsx");

export const useStaffOrDeveloperSettingPredicate = function useStaffOrDeveloperSettingPredicate() {
  const items = [closure_2];
  return initialize.useStateFromStores(items, () => isDeveloper.isDeveloper);
};
