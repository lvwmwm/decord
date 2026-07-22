// Module ID: 13631
// Function ID: 103260
// Name: useStaffOrDeveloperSettingPredicate
// Dependencies: []
// Exports: useStaffOrDeveloperSettingPredicate

// Module 13631 (useStaffOrDeveloperSettingPredicate)
let closure_2 = importDefault(dependencyMap[0]);
const result = arg1(dependencyMap[2]).fileFinishedImporting("modules/user_settings/dev_tools/native/useIsStaffOrDeveloperSettingPredicate.tsx");

export const useStaffOrDeveloperSettingPredicate = function useStaffOrDeveloperSettingPredicate() {
  const items = [closure_2];
  return arg1(dependencyMap[1]).useStateFromStores(items, () => isDeveloper.isDeveloper);
};
