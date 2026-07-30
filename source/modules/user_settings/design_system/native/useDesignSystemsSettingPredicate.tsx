// Module ID: 14543
// Function ID: 14544
// Name: useDesignSystemsSettingPredicate
// Dependencies: [13868, 9906, 2]
// Exports: useDesignSystemsSettingPredicate

// Module 14543 (useDesignSystemsSettingPredicate)
const result = require("set").fileFinishedImporting("modules/user_settings/design_system/native/useDesignSystemsSettingPredicate.tsx");

export const useDesignSystemsSettingPredicate = function useDesignSystemsSettingPredicate() {
  let staffOrDeveloperSettingPredicate = require(13868) /* useStaffOrDeveloperSettingPredicate */.useStaffOrDeveloperSettingPredicate();
  const obj = require(13868) /* useStaffOrDeveloperSettingPredicate */;
  if (!staffOrDeveloperSettingPredicate) {
    staffOrDeveloperSettingPredicate = obj2.usePlaygroundAccessExperiment("design_systems_settings");
  }
  return staffOrDeveloperSettingPredicate;
};
