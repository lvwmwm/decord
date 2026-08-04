// Module ID: 13985
// Function ID: 13986
// Name: updateDmSafetyAlertsSetting
// Dependencies: [1355, 1337, 2]
// Exports: updateDmSafetyAlertsSetting

// Module 13985 (updateDmSafetyAlertsSetting)
const result = require("set").fileFinishedImporting("modules/self_mod/inappropriate_conversation/updateDmSafetyAlertsSetting.tsx");

export const updateDmSafetyAlertsSetting = function updateDmSafetyAlertsSetting(arg0) {
  const _require = arg0;
  const PreloadedUserSettingsActionCreators = _require(1355).PreloadedUserSettingsActionCreators;
  return PreloadedUserSettingsActionCreators.updateAsync("privacy", (arg0) => {
    const BoolValue = callback(outer1_1[1]).BoolValue;
    arg0.inappropriateConversationWarnings = BoolValue.create({ value: callback });
  }, _require(1355).UserSettingsDelay.INFREQUENT_USER_ACTION);
};
