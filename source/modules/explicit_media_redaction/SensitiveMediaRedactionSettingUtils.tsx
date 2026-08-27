// Module ID: 6097
// Function ID: 6098
// Name: getShouldObscureForSetting
// Dependencies: [1306, 12, 2]
// Exports: areSettingsEqual, getShouldObscureForSetting

// Module 6097 (getShouldObscureForSetting)
import set from "set" /* 2 */;
import apply from "apply" /* 12 */;
import create from "create" /* 1306 */;

const result = set.fileFinishedImporting("modules/explicit_media_redaction/SensitiveMediaRedactionSettingUtils.tsx");

export const getShouldObscureForSetting = function getShouldObscureForSetting(tmp10Result) {
  return tmp10Result === create.ExplicitContentRedaction.BLUR || tmp10Result === create.ExplicitContentRedaction.BLOCK;
};
export const areSettingsEqual = function areSettingsEqual(arg0, arg1) {
  return apply.isEqual(arg0, arg1);
};
