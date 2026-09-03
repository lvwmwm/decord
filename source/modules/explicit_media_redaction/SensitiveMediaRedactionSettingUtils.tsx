// Module ID: 6154
// Function ID: 6155
// Name: getShouldObscureForSetting
// Dependencies: [1305, 12, 2]
// Exports: areSettingsEqual, getShouldObscureForSetting

// Module 6154 (getShouldObscureForSetting)
import set from "set" /* 2 */;
import apply from "apply" /* 12 */;
import create from "create" /* 1305 */;

const result = set.fileFinishedImporting("modules/explicit_media_redaction/SensitiveMediaRedactionSettingUtils.tsx");

export const getShouldObscureForSetting = function getShouldObscureForSetting(tmp10Result) {
  return tmp10Result === create.ExplicitContentRedaction.BLUR || tmp10Result === create.ExplicitContentRedaction.BLOCK;
};
export const areSettingsEqual = function areSettingsEqual(arg0, arg1) {
  return apply.isEqual(arg0, arg1);
};
