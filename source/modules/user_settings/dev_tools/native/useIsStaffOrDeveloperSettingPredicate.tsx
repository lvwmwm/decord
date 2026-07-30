// Module ID: 13868
// Function ID: 13869
// Name: useStaffOrDeveloperSettingPredicate
// Dependencies: [6002, 589, 2]
// Exports: useStaffOrDeveloperSettingPredicate

// Module 13868 (useStaffOrDeveloperSettingPredicate)
import init from "init";

const require = arg1;
const result = require("set").fileFinishedImporting("modules/user_settings/dev_tools/native/useIsStaffOrDeveloperSettingPredicate.tsx");

export const useStaffOrDeveloperSettingPredicate = function useStaffOrDeveloperSettingPredicate() {
  const items = [init];
  return require(589) /* initialize */.useStateFromStores(items, () => isDeveloper.isDeveloper);
};
