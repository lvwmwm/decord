// Module ID: 13622
// Function ID: 103205
// Name: useStaffOrDeveloperSettingPredicate
// Dependencies: [0, 0, 0]
// Exports: useStaffOrDeveloperSettingPredicate

// Module 13622 (useStaffOrDeveloperSettingPredicate)
import __exportStarResult1 from "__exportStarResult1";

const result = require("__exportStarResult1").fileFinishedImporting("modules/user_settings/dev_tools/native/useIsStaffOrDeveloperSettingPredicate.tsx");

export const useStaffOrDeveloperSettingPredicate = function useStaffOrDeveloperSettingPredicate() {
  const items = [__exportStarResult1];
  return arg1(dependencyMap[1]).useStateFromStores(items, () => isDeveloper.isDeveloper);
};
