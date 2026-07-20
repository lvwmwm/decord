// Module ID: 13615
// Function ID: 103182
// Name: useStaffOrDeveloperSettingPredicate
// Dependencies: [0, 0, 0]
// Exports: useStaffOrDeveloperSettingPredicate

// Module 13615 (useStaffOrDeveloperSettingPredicate)
import closure_2 from "result";
import result from "result";

result = result.fileFinishedImporting("modules/user_settings/dev_tools/native/useIsStaffOrDeveloperSettingPredicate.tsx");

export const useStaffOrDeveloperSettingPredicate = function useStaffOrDeveloperSettingPredicate() {
  const items = [closure_2];
  return arg1(dependencyMap[1]).useStateFromStores(items, () => isDeveloper.isDeveloper);
};
