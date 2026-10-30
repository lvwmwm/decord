// Module ID: 17705
// Function ID: 17706
// Name: useDesignSystemsSettingPredicate
// Dependencies: [16691, 13351, 2]
// Exports: useDesignSystemsSettingPredicate

// Module 17705 (useDesignSystemsSettingPredicate)
import PlaygroundAccessExperiment from "PlaygroundAccessExperiment" /* 13351 */;
import useIsStaffOrDeveloperSettingPredicate from "useIsStaffOrDeveloperSettingPredicate" /* 16691 */;
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
