// Module ID: 15928
// Function ID: 15929
// Name: useDesignSystemsSettingPredicate
// Dependencies: [558, 14927, 11591, 2]

// Module 15928 (useDesignSystemsSettingPredicate)
import PlaygroundAccessExperiment from "PlaygroundAccessExperiment" /* 11591 */;
import useIsStaffOrDeveloperSettingPredicate from "useIsStaffOrDeveloperSettingPredicate" /* 14927 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const tmp2 = ReactCompilerGating.isReactCompilerEnabled() ? (function useDesignSystemsSettingPredicate() {
  const obj = useIsStaffOrDeveloperSettingPredicate;
  let staffOrDeveloperSettingPredicate = obj.useStaffOrDeveloperSettingPredicate();
  const obj2 = PlaygroundAccessExperiment;
  if (!staffOrDeveloperSettingPredicate) {
    staffOrDeveloperSettingPredicate = obj2.usePlaygroundAccessExperiment("design_systems_settings");
  }
  return staffOrDeveloperSettingPredicate;
}) : (function useDesignSystemsSettingPredicate() {
  const obj = useIsStaffOrDeveloperSettingPredicate;
  let staffOrDeveloperSettingPredicate = obj.useStaffOrDeveloperSettingPredicate();
  const obj2 = PlaygroundAccessExperiment;
  if (!staffOrDeveloperSettingPredicate) {
    staffOrDeveloperSettingPredicate = obj2.usePlaygroundAccessExperiment("design_systems_settings");
  }
  return staffOrDeveloperSettingPredicate;
});
const result = size.fileFinishedImporting("modules/user_settings/design_system/native/useDesignSystemsSettingPredicate.tsx");

export const useDesignSystemsSettingPredicate = tmp2;
