// Module ID: 5882
// Function ID: 5883
// Name: getShouldObscureForSetting
// Dependencies: [1306, 12, 2]
// Exports: areSettingsEqual, getShouldObscureForSetting

// Module 5882 (getShouldObscureForSetting)
const result = require("set").fileFinishedImporting("modules/explicit_media_redaction/SensitiveMediaRedactionSettingUtils.tsx");

export const getShouldObscureForSetting = function getShouldObscureForSetting(tmp10Result) {
  return tmp10Result === require(1306) /* create */.ExplicitContentRedaction.BLUR || tmp10Result === require(1306) /* create */.ExplicitContentRedaction.BLOCK;
};
export const areSettingsEqual = function areSettingsEqual(arg0, arg1) {
  return require(12) /* apply */.isEqual(arg0, arg1);
};
