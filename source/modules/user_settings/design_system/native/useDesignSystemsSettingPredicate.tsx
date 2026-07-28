// Module ID: 14522
// Function ID: 110798
// Name: useDesignSystemsSettingPredicate
// Dependencies: [13852, 9887, 2]
// Exports: useDesignSystemsSettingPredicate

// Module 14522 (useDesignSystemsSettingPredicate)
const result = require("set").fileFinishedImporting("modules/user_settings/design_system/native/useDesignSystemsSettingPredicate.tsx");

export const useDesignSystemsSettingPredicate = function useDesignSystemsSettingPredicate() {
  let staffOrDeveloperSettingPredicate = require(13852) /* useStaffOrDeveloperSettingPredicate */.useStaffOrDeveloperSettingPredicate();
  const obj = require(13852) /* useStaffOrDeveloperSettingPredicate */;
  if (!staffOrDeveloperSettingPredicate) {
    staffOrDeveloperSettingPredicate = obj2.usePlaygroundAccessExperiment("design_systems_settings");
  }
  return staffOrDeveloperSettingPredicate;
};
