// Module ID: 13789
// Function ID: 105698
// Name: updateDmSafetyAlertsSetting
// Dependencies: [1331, 1313, 2]
// Exports: updateDmSafetyAlertsSetting

// Module 13789 (updateDmSafetyAlertsSetting)
const result = require("set").fileFinishedImporting("modules/self_mod/inappropriate_conversation/updateDmSafetyAlertsSetting.tsx");

export const updateDmSafetyAlertsSetting = function updateDmSafetyAlertsSetting(arg0) {
  const _require = arg0;
  const PreloadedUserSettingsActionCreators = _require(1331).PreloadedUserSettingsActionCreators;
  return PreloadedUserSettingsActionCreators.updateAsync("privacy", (arg0) => {
    const BoolValue = callback(outer1_1[1]).BoolValue;
    arg0.inappropriateConversationWarnings = BoolValue.create({ value: callback });
  }, _require(1331).UserSettingsDelay.INFREQUENT_USER_ACTION);
};
