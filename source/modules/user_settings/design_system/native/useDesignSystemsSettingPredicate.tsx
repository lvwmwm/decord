// Module ID: 14294
// Function ID: 107974
// Name: useDesignSystemsSettingPredicate
// Dependencies: [0, 0, 0]
// Exports: useDesignSystemsSettingPredicate

// Module 14294 (useDesignSystemsSettingPredicate)
import result from "result";

result = result.fileFinishedImporting("modules/user_settings/design_system/native/useDesignSystemsSettingPredicate.tsx");

export const useDesignSystemsSettingPredicate = function useDesignSystemsSettingPredicate() {
  let staffOrDeveloperSettingPredicate = require(dependencyMap[0]).useStaffOrDeveloperSettingPredicate();
  const obj = require(dependencyMap[0]);
  if (!staffOrDeveloperSettingPredicate) {
    staffOrDeveloperSettingPredicate = obj2.usePlaygroundAccessExperiment("design_systems_settings");
  }
  return staffOrDeveloperSettingPredicate;
};
