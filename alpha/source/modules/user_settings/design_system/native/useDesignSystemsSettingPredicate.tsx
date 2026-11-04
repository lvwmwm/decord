// Module ID: 18013
// Function ID: 18014
// Name: useDesignSystemsSettingPredicate
// Dependencies: [16993, 13622, 2]
// Exports: useDesignSystemsSettingPredicate

// Module 18013 (useDesignSystemsSettingPredicate)
import PlaygroundAccessExperiment from "PlaygroundAccessExperiment" /* 13622 */;
import useIsStaffOrDeveloperSettingPredicate from "useIsStaffOrDeveloperSettingPredicate" /* 16993 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/user_settings/design_system/native/useDesignSystemsSettingPredicate.tsx");

export function useDesignSystemsSettingPredicate() {
  const obj = useIsStaffOrDeveloperSettingPredicate;
  let staffOrDeveloperSettingPredicate = obj.useStaffOrDeveloperSettingPredicate();
  const obj2 = PlaygroundAccessExperiment;
  if (!staffOrDeveloperSettingPredicate) {
    staffOrDeveloperSettingPredicate = obj2.usePlaygroundAccessExperiment("design_systems_settings");
  }
  return staffOrDeveloperSettingPredicate;
}
