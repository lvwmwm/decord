// Module ID: 15674
// Function ID: 15675
// Name: useDesignSystemsSettingPredicate
// Dependencies: [14767, 10919, 2]
// Exports: useDesignSystemsSettingPredicate

// Module 15674 (useDesignSystemsSettingPredicate)
import set from "set" /* 2 */;
import useStaffOrDeveloperSettingPredicate from "useStaffOrDeveloperSettingPredicate" /* 14767 */;

const result = set.fileFinishedImporting("modules/user_settings/design_system/native/useDesignSystemsSettingPredicate.tsx");

export const useDesignSystemsSettingPredicate = function useDesignSystemsSettingPredicate() {
  let staffOrDeveloperSettingPredicate = useStaffOrDeveloperSettingPredicate.useStaffOrDeveloperSettingPredicate();
  const obj = useStaffOrDeveloperSettingPredicate;
  if (!staffOrDeveloperSettingPredicate) {
    staffOrDeveloperSettingPredicate = obj2.usePlaygroundAccessExperiment("design_systems_settings");
  }
  return staffOrDeveloperSettingPredicate;
};
