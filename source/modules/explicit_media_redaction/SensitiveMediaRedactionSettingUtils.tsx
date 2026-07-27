// Module ID: 5854
// Function ID: 51663
// Name: getShouldObscureForSetting
// Dependencies: [1282, 22, 2]
// Exports: areSettingsEqual, getShouldObscureForSetting

// Module 5854 (getShouldObscureForSetting)
const result = require("set").fileFinishedImporting("modules/explicit_media_redaction/SensitiveMediaRedactionSettingUtils.tsx");

export const getShouldObscureForSetting = function getShouldObscureForSetting(explicitContentGuilds) {
  let tmp = explicitContentGuilds === require(1282) /* _callSuper */.ExplicitContentRedaction.BLUR;
  if (!tmp) {
    tmp = explicitContentGuilds === require(1282) /* _callSuper */.ExplicitContentRedaction.BLOCK;
  }
  return tmp;
};
export const areSettingsEqual = function areSettingsEqual(arg0, arg1) {
  return require(22) /* apply */.isEqual(arg0, arg1);
};
