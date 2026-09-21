// Module ID: 15120
// Function ID: 15121
// Name: useIsStaffOrDeveloperSettingPredicate
// Dependencies: [7956, 504, 2]
// Exports: useStaffOrDeveloperSettingPredicate

// Module 15120 (useIsStaffOrDeveloperSettingPredicate)
import initialize from "initialize" /* 504 */;
import DeveloperExperimentStore from "DeveloperExperimentStore" /* 7956 */;

require = fn;
const size = fn(2);
const result = size.fileFinishedImporting("modules/user_settings/dev_tools/native/useIsStaffOrDeveloperSettingPredicate.tsx");

export const useStaffOrDeveloperSettingPredicate = function useStaffOrDeveloperSettingPredicate() {
  const items = [DeveloperExperimentStore];
  return initialize.useStateFromStores(items, () => isDeveloper.isDeveloper);
};
