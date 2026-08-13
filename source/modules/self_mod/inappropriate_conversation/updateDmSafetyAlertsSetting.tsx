// Module ID: 14147
// Function ID: 14148
// Name: updateDmSafetyAlertsSetting
// Dependencies: [1374, 1337, 2]
// Exports: updateDmSafetyAlertsSetting

// Module 14147 (updateDmSafetyAlertsSetting)
const result = require("set").fileFinishedImporting("modules/self_mod/inappropriate_conversation/updateDmSafetyAlertsSetting.tsx");

export const updateDmSafetyAlertsSetting = function updateDmSafetyAlertsSetting(arg0) {
  const _require = arg0;
  const PreloadedUserSettingsActionCreators = _require(1374).PreloadedUserSettingsActionCreators;
  return PreloadedUserSettingsActionCreators.updateAsync("privacy", (arg0) => {
    const BoolValue = callback(outer1_1[1]).BoolValue;
    arg0.inappropriateConversationWarnings = BoolValue.create({ value: callback });
  }, _require(1374).UserSettingsDelay.INFREQUENT_USER_ACTION);
};
