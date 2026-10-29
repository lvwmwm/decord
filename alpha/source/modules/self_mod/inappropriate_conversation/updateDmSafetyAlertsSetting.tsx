// Module ID: 16631
// Function ID: 16632
// Name: updateDmSafetyAlertsSetting
// Dependencies: [4838, 1239, 2]
// Exports: updateDmSafetyAlertsSetting

// Module 16631 (updateDmSafetyAlertsSetting)
import wrappers from "wrappers" /* 1239 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require;

const result = size.fileFinishedImporting("modules/self_mod/inappropriate_conversation/updateDmSafetyAlertsSetting.tsx");

export function updateDmSafetyAlertsSetting(value) {
  _require = value;
  const PreloadedUserSettingsActionCreators = require("UserSettingsProtoActionCreators").PreloadedUserSettingsActionCreators;
  return PreloadedUserSettingsActionCreators.updateAsync("privacy", async (arg0) => {
    const BoolValue = wrappers.BoolValue;
    const obj = { value };
    arg0.inappropriateConversationWarnings = BoolValue.create(obj);
  }, require("UserSettingsProtoActionCreators").UserSettingsDelay.INFREQUENT_USER_ACTION);
}
