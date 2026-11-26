// Module ID: 17215
// Function ID: 17216
// Name: useDesignSystemsSettingPredicate
// Dependencies: [16156, 10089, 2]
// Exports: useDesignSystemsSettingPredicate

// Module 17215 (useDesignSystemsSettingPredicate)
import PlaygroundAccessExperiment from "PlaygroundAccessExperiment" /* 10089 */;
import useIsStaffOrDeveloperSettingPredicate from "useIsStaffOrDeveloperSettingPredicate" /* 16156 */;
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
