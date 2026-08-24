// Module ID: 14958
// Function ID: 14959
// Name: useDesignSystemsSettingPredicate
// Dependencies: [14267, 12083, 2]
// Exports: useDesignSystemsSettingPredicate

// Module 14958 (useDesignSystemsSettingPredicate)
import set from "set" /* 2 */;
import useStaffOrDeveloperSettingPredicate from "useStaffOrDeveloperSettingPredicate" /* 14267 */;

const result = set.fileFinishedImporting("modules/user_settings/design_system/native/useDesignSystemsSettingPredicate.tsx");

export const useDesignSystemsSettingPredicate = function useDesignSystemsSettingPredicate() {
  let staffOrDeveloperSettingPredicate = useStaffOrDeveloperSettingPredicate.useStaffOrDeveloperSettingPredicate();
  const obj = useStaffOrDeveloperSettingPredicate;
  if (!staffOrDeveloperSettingPredicate) {
    staffOrDeveloperSettingPredicate = obj2.usePlaygroundAccessExperiment("design_systems_settings");
  }
  return staffOrDeveloperSettingPredicate;
};
