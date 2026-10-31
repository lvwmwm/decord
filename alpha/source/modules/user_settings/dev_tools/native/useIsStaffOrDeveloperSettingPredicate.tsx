// Module ID: 16733
// Function ID: 16734
// Name: useIsStaffOrDeveloperSettingPredicate
// Dependencies: [7864, 504, 2]
// Exports: useStaffOrDeveloperSettingPredicate

// Module 16733 (useIsStaffOrDeveloperSettingPredicate)
import get_initialized from "get initialized" /* 504 */;
import DeveloperExperimentStore from "DeveloperExperimentStore" /* 7864 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/user_settings/dev_tools/native/useIsStaffOrDeveloperSettingPredicate.tsx");

export function useStaffOrDeveloperSettingPredicate() {
  let isDeveloper;
  const items = [DeveloperExperimentStore];
  const obj = get_initialized;
  return obj.useStateFromStores(items, () => isDeveloper.isDeveloper);
}
