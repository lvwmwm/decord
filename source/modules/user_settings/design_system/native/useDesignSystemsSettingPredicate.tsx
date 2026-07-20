// Module ID: 14284
// Function ID: 107919
// Name: useDesignSystemsSettingPredicate
// Dependencies: [0, 0, 0]
// Exports: useDesignSystemsSettingPredicate

// Module 14284 (useDesignSystemsSettingPredicate)
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
