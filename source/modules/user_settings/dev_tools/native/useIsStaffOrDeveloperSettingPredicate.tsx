// Module ID: 14017
// Function ID: 14018
// Name: useStaffOrDeveloperSettingPredicate
// Dependencies: [7119, 589, 2]
// Exports: useStaffOrDeveloperSettingPredicate

// Module 14017 (useStaffOrDeveloperSettingPredicate)
import init from "init";

const require = arg1;
const result = require("set").fileFinishedImporting("modules/user_settings/dev_tools/native/useIsStaffOrDeveloperSettingPredicate.tsx");

export const useStaffOrDeveloperSettingPredicate = function useStaffOrDeveloperSettingPredicate() {
  const items = [init];
  return require(589) /* initialize */.useStateFromStores(items, () => isDeveloper.isDeveloper);
};
