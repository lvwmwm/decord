// Module ID: 14163
// Function ID: 14164
// Name: useStaffOrDeveloperSettingPredicate
// Dependencies: [7224, 589, 2]
// Exports: useStaffOrDeveloperSettingPredicate

// Module 14163 (useStaffOrDeveloperSettingPredicate)
import init from "init";

const require = arg1;
const result = require("set").fileFinishedImporting("modules/user_settings/dev_tools/native/useIsStaffOrDeveloperSettingPredicate.tsx");

export const useStaffOrDeveloperSettingPredicate = function useStaffOrDeveloperSettingPredicate() {
  const items = [init];
  return require(589) /* initialize */.useStateFromStores(items, () => isDeveloper.isDeveloper);
};
