// Module ID: 13808
// Function ID: 105872
// Name: useStaffOrDeveloperSettingPredicate
// Dependencies: [5951, 566, 2]
// Exports: useStaffOrDeveloperSettingPredicate

// Module 13808 (useStaffOrDeveloperSettingPredicate)
import _isNativeReflectConstruct from "_isNativeReflectConstruct";

const require = arg1;
const result = require("set").fileFinishedImporting("modules/user_settings/dev_tools/native/useIsStaffOrDeveloperSettingPredicate.tsx");

export const useStaffOrDeveloperSettingPredicate = function useStaffOrDeveloperSettingPredicate() {
  const items = [_isNativeReflectConstruct];
  return require(566) /* initialize */.useStateFromStores(items, () => outer1_2.isDeveloper);
};
