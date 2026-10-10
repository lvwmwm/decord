// Module ID: 15091
// Function ID: 15092
// Name: updateDmSafetyAlertsSetting
// Dependencies: [2046, 1240, 2]
// Exports: updateDmSafetyAlertsSetting

// Module 15091 (updateDmSafetyAlertsSetting)
import wrappers from "wrappers" /* 1240 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require;

const result = size.fileFinishedImporting("modules/self_mod/inappropriate_conversation/updateDmSafetyAlertsSetting.tsx");

export const updateDmSafetyAlertsSetting = function updateDmSafetyAlertsSetting(value) {
  _require = value;
  const PreloadedUserSettingsActionCreators = require("UserSettingsProtoActionCreators").PreloadedUserSettingsActionCreators;
  return PreloadedUserSettingsActionCreators.updateAsync("privacy", async (arg0) => {
    const BoolValue = wrappers.BoolValue;
    const obj = { value };
    arg0.inappropriateConversationWarnings = BoolValue.create(obj);
  }, require("UserSettingsProtoActionCreators").UserSettingsDelay.INFREQUENT_USER_ACTION);
};
