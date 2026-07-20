// Module ID: 13608
// Function ID: 103140
// Name: updateDmSafetyAlertsSetting
// Dependencies: []
// Exports: updateDmSafetyAlertsSetting

// Module 13608 (updateDmSafetyAlertsSetting)
const _module = require(dependencyMap[2]);
const result = _module.fileFinishedImporting("modules/self_mod/inappropriate_conversation/updateDmSafetyAlertsSetting.tsx");

export const updateDmSafetyAlertsSetting = function updateDmSafetyAlertsSetting(arg0) {
  const require = arg0;
  const PreloadedUserSettingsActionCreators = require(dependencyMap[0]).PreloadedUserSettingsActionCreators;
  return PreloadedUserSettingsActionCreators.updateAsync("privacy", (arg0) => {
    const BoolValue = arg0(closure_1[1]).BoolValue;
    arg0.inappropriateConversationWarnings = BoolValue.create({ value: arg0 });
  }, require(dependencyMap[0]).UserSettingsDelay.INFREQUENT_USER_ACTION);
};
