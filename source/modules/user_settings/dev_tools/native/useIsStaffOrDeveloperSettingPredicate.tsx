// Module ID: 14087
// Function ID: 14088
// Name: useStaffOrDeveloperSettingPredicate
// Dependencies: [7179, 589, 2]
// Exports: useStaffOrDeveloperSettingPredicate

// Module 14087 (useStaffOrDeveloperSettingPredicate)
import init from "init";

const require = arg1;
const result = require("set").fileFinishedImporting("modules/user_settings/dev_tools/native/useIsStaffOrDeveloperSettingPredicate.tsx");

export const useStaffOrDeveloperSettingPredicate = function useStaffOrDeveloperSettingPredicate() {
  const items = [init];
  return require(589) /* initialize */.useStateFromStores(items, () => isDeveloper.isDeveloper);
};
