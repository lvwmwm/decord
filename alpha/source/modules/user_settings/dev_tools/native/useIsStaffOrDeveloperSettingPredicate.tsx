// Module ID: 16356
// Function ID: 16357
// Name: useIsStaffOrDeveloperSettingPredicate
// Dependencies: [8385, 504, 2]
// Exports: useStaffOrDeveloperSettingPredicate

// Module 16356 (useIsStaffOrDeveloperSettingPredicate)
import get_initialized from "get initialized" /* 504 */;
import DeveloperExperimentStore from "DeveloperExperimentStore" /* 8385 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/user_settings/dev_tools/native/useIsStaffOrDeveloperSettingPredicate.tsx");

export function useStaffOrDeveloperSettingPredicate() {
  let isDeveloper;
  const items = [DeveloperExperimentStore];
  const obj = get_initialized;
  return obj.useStateFromStores(items, () => isDeveloper.isDeveloper);
}
