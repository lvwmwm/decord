// Module ID: 14199
// Function ID: 14200
// Name: useStaffOrDeveloperSettingPredicate
// Dependencies: [7472, 589, 2]
// Exports: useStaffOrDeveloperSettingPredicate

// Module 14199 (useStaffOrDeveloperSettingPredicate)
import init from "init";

const require = arg1;
const result = require("set").fileFinishedImporting("modules/user_settings/dev_tools/native/useIsStaffOrDeveloperSettingPredicate.tsx");

export const useStaffOrDeveloperSettingPredicate = function useStaffOrDeveloperSettingPredicate() {
  const items = [init];
  return require(589) /* initialize */.useStateFromStores(items, () => isDeveloper.isDeveloper);
};
