// Module ID: 7576
// Function ID: 7577
// Name: SensitiveMediaRedactionSettingUtils
// Dependencies: [1190, 12, 2]
// Exports: areSettingsEqual, getShouldObscureForSetting

// Module 7576 (SensitiveMediaRedactionSettingUtils)
import _mod12 from "module_12" /* 12 */;
import preloaded_user_settings from "preloaded_user_settings" /* 1190 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/explicit_media_redaction/SensitiveMediaRedactionSettingUtils.tsx");

export const getShouldObscureForSetting = function getShouldObscureForSetting(tmp10Result) {
  return tmp10Result === preloaded_user_settings.ExplicitContentRedaction.BLUR || tmp10Result === preloaded_user_settings.ExplicitContentRedaction.BLOCK;
};
export const areSettingsEqual = function areSettingsEqual(arg0, arg1) {
  return _mod12.isEqual(arg0, arg1);
};
