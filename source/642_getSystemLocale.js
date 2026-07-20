// Module ID: 642
// Function ID: 7355
// Name: getSystemLocale
// Dependencies: []
// Exports: getSystemLocale

// Module 642 (getSystemLocale)
const _module = require(dependencyMap[2]);
const result = _module.fileFinishedImporting("../discord_common/js/packages/i18n/getSystemLocale.tsx");

export const getSystemLocale = function getSystemLocale() {
  const tmp = require(dependencyMap[0]);
  if ("android" === tmp.Platform.OS) {
    let LocalizationManager = require(dependencyMap[1]).default;
  } else {
    LocalizationManager = tmp.NativeModules.LocalizationManager;
  }
  let Language;
  if (null != LocalizationManager) {
    Language = LocalizationManager.getConstants().Language;
  }
  let str = "";
  if (null != Language) {
    str = Language;
  }
  return str;
};
