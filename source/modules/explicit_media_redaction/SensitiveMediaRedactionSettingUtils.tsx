// Module ID: 5673
// Function ID: 48726
// Name: getShouldObscureForSetting
// Dependencies: []
// Exports: areSettingsEqual, getShouldObscureForSetting

// Module 5673 (getShouldObscureForSetting)
const _module = require(dependencyMap[2]);
const result = _module.fileFinishedImporting("modules/explicit_media_redaction/SensitiveMediaRedactionSettingUtils.tsx");

export const getShouldObscureForSetting = function getShouldObscureForSetting(explicitContentGuilds) {
  let tmp = explicitContentGuilds === require(dependencyMap[0]).ExplicitContentRedaction.BLUR;
  if (!tmp) {
    tmp = explicitContentGuilds === require(dependencyMap[0]).ExplicitContentRedaction.BLOCK;
  }
  return tmp;
};
export const areSettingsEqual = function areSettingsEqual(arg0, arg1) {
  return require(dependencyMap[1]).isEqual(arg0, arg1);
};
