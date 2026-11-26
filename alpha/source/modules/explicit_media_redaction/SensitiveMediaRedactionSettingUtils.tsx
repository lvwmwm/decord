// Module ID: 8207
// Function ID: 8208
// Name: SensitiveMediaRedactionSettingUtils
// Dependencies: [1195, 12, 2]
// Exports: areSettingsEqual, getShouldObscureForSetting

// Module 8207 (SensitiveMediaRedactionSettingUtils)
import _mod12 from "module_12" /* 12 */;
import preloaded_user_settings from "preloaded_user_settings" /* 1195 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/explicit_media_redaction/SensitiveMediaRedactionSettingUtils.tsx");

export function getShouldObscureForSetting(tmp10Result) {
  const tmp3 = tmp10Result === preloaded_user_settings.ExplicitContentRedaction.BLUR || tmp10Result === preloaded_user_settings.ExplicitContentRedaction.BLOCK;
  return tmp3;
}
export function areSettingsEqual(arg0, arg1) {
  const obj = _mod12;
  return obj.isEqual(arg0, arg1);
}
