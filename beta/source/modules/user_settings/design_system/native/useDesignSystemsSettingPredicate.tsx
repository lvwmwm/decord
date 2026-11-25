// Module ID: 17211
// Function ID: 17212
// Name: useDesignSystemsSettingPredicate
// Dependencies: [16152, 10089, 2]
// Exports: useDesignSystemsSettingPredicate

// Module 17211 (useDesignSystemsSettingPredicate)
import PlaygroundAccessExperiment from "PlaygroundAccessExperiment" /* 10089 */;
import useIsStaffOrDeveloperSettingPredicate from "useIsStaffOrDeveloperSettingPredicate" /* 16152 */;
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
