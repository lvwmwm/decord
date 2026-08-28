// Module ID: 14374
// Function ID: 14375
// Name: updateDmSafetyAlertsSetting
// Dependencies: [1374, 1337, 2]
// Exports: updateDmSafetyAlertsSetting

// Module 14374 (updateDmSafetyAlertsSetting)
import set from "set" /* 2 */;

const result = set.fileFinishedImporting("modules/self_mod/inappropriate_conversation/updateDmSafetyAlertsSetting.tsx");

export const updateDmSafetyAlertsSetting = function updateDmSafetyAlertsSetting(arg0) {
  const _require = arg0;
  const PreloadedUserSettingsActionCreators = _require(1374).PreloadedUserSettingsActionCreators;
  return PreloadedUserSettingsActionCreators.updateAsync("privacy", (arg0) => {
    const BoolValue = callback(closure_1_1[1]).BoolValue;
    arg0.inappropriateConversationWarnings = BoolValue.create({ value: callback });
  }, _require(1374).UserSettingsDelay.INFREQUENT_USER_ACTION);
};
