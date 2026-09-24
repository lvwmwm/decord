// Module ID: 15112
// Function ID: 15113
// Name: updateDmSafetyAlertsSetting
// Dependencies: [2028, 1221, 2]
// Exports: updateDmSafetyAlertsSetting

// Module 15112 (updateDmSafetyAlertsSetting)
import wrappers from "wrappers" /* 1221 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;

const result = size.fileFinishedImporting("modules/self_mod/inappropriate_conversation/updateDmSafetyAlertsSetting.tsx");

export const updateDmSafetyAlertsSetting = function updateDmSafetyAlertsSetting(value) {
  _require = value;
  const PreloadedUserSettingsActionCreators = require("UserSettingsProtoActionCreators").PreloadedUserSettingsActionCreators;
  return PreloadedUserSettingsActionCreators.updateAsync("privacy", async (arg0) => {
    const BoolValue = wrappers.BoolValue;
    arg0.inappropriateConversationWarnings = BoolValue.create({ value });
  }, require("UserSettingsProtoActionCreators").UserSettingsDelay.INFREQUENT_USER_ACTION);
};
