// Module ID: 13892
// Function ID: 13893
// Name: useStaffOrDeveloperSettingPredicate
// Dependencies: [6008, 589, 2]
// Exports: useStaffOrDeveloperSettingPredicate

// Module 13892 (useStaffOrDeveloperSettingPredicate)
import init from "init";

const require = arg1;
const result = require("set").fileFinishedImporting("modules/user_settings/dev_tools/native/useIsStaffOrDeveloperSettingPredicate.tsx");

export const useStaffOrDeveloperSettingPredicate = function useStaffOrDeveloperSettingPredicate() {
  const items = [init];
  return require(589) /* initialize */.useStateFromStores(items, () => isDeveloper.isDeveloper);
};
