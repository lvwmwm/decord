// Module ID: 13745
// Function ID: 105416
// Name: useStaffOrDeveloperSettingPredicate
// Dependencies: [6961, 566, 2]
// Exports: useStaffOrDeveloperSettingPredicate

// Module 13745 (useStaffOrDeveloperSettingPredicate)
import _isNativeReflectConstruct from "_isNativeReflectConstruct";

const require = arg1;
const result = require("set").fileFinishedImporting("modules/user_settings/dev_tools/native/useIsStaffOrDeveloperSettingPredicate.tsx");

export const useStaffOrDeveloperSettingPredicate = function useStaffOrDeveloperSettingPredicate() {
  const items = [_isNativeReflectConstruct];
  return require(566) /* initialize */.useStateFromStores(items, () => outer1_2.isDeveloper);
};
