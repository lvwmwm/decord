// Module ID: 14840
// Function ID: 14841
// Name: useDesignSystemsSettingPredicate
// Dependencies: [14154, 10296, 2]
// Exports: useDesignSystemsSettingPredicate

// Module 14840 (useDesignSystemsSettingPredicate)
const result = require("set").fileFinishedImporting("modules/user_settings/design_system/native/useDesignSystemsSettingPredicate.tsx");

export const useDesignSystemsSettingPredicate = function useDesignSystemsSettingPredicate() {
  let staffOrDeveloperSettingPredicate = require(14154) /* useStaffOrDeveloperSettingPredicate */.useStaffOrDeveloperSettingPredicate();
  const obj = require(14154) /* useStaffOrDeveloperSettingPredicate */;
  if (!staffOrDeveloperSettingPredicate) {
    staffOrDeveloperSettingPredicate = obj2.usePlaygroundAccessExperiment("design_systems_settings");
  }
  return staffOrDeveloperSettingPredicate;
};
