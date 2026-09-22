// Module ID: 16078
// Function ID: 16079
// Name: useDesignSystemsSettingPredicate
// Dependencies: [15127, 11260, 2]
// Exports: useDesignSystemsSettingPredicate

// Module 16078 (useDesignSystemsSettingPredicate)
import useIsStaffOrDeveloperSettingPredicate from "useIsStaffOrDeveloperSettingPredicate" /* 15127 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/user_settings/design_system/native/useDesignSystemsSettingPredicate.tsx");

export const useDesignSystemsSettingPredicate = function useDesignSystemsSettingPredicate() {
  let staffOrDeveloperSettingPredicate = useIsStaffOrDeveloperSettingPredicate.useStaffOrDeveloperSettingPredicate();
  if (!staffOrDeveloperSettingPredicate) {
    staffOrDeveloperSettingPredicate = obj2.usePlaygroundAccessExperiment("design_systems_settings");
  }
  return staffOrDeveloperSettingPredicate;
};
