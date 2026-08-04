// Module ID: 14667
// Function ID: 14668
// Name: useDesignSystemsSettingPredicate
// Dependencies: [13993, 10165, 2]
// Exports: useDesignSystemsSettingPredicate

// Module 14667 (useDesignSystemsSettingPredicate)
const result = require("set").fileFinishedImporting("modules/user_settings/design_system/native/useDesignSystemsSettingPredicate.tsx");

export const useDesignSystemsSettingPredicate = function useDesignSystemsSettingPredicate() {
  let staffOrDeveloperSettingPredicate = require(13993) /* useStaffOrDeveloperSettingPredicate */.useStaffOrDeveloperSettingPredicate();
  const obj = require(13993) /* useStaffOrDeveloperSettingPredicate */;
  if (!staffOrDeveloperSettingPredicate) {
    staffOrDeveloperSettingPredicate = obj2.usePlaygroundAccessExperiment("design_systems_settings");
  }
  return staffOrDeveloperSettingPredicate;
};
