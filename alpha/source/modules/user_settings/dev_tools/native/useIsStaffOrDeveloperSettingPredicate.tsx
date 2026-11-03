// Module ID: 16889
// Function ID: 16890
// Name: useIsStaffOrDeveloperSettingPredicate
// Dependencies: [7988, 504, 2]
// Exports: useStaffOrDeveloperSettingPredicate

// Module 16889 (useIsStaffOrDeveloperSettingPredicate)
import get_initialized from "get initialized" /* 504 */;
import DeveloperExperimentStore from "DeveloperExperimentStore" /* 7988 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/user_settings/dev_tools/native/useIsStaffOrDeveloperSettingPredicate.tsx");

export function useStaffOrDeveloperSettingPredicate() {
  let isDeveloper;
  const items = [DeveloperExperimentStore];
  const obj = get_initialized;
  return obj.useStateFromStores(items, () => isDeveloper.isDeveloper);
}
