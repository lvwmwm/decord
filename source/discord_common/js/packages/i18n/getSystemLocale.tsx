// Module ID: 642
// Function ID: 7355
// Name: getSystemLocale
// Dependencies: [27, 643, 2]
// Exports: getSystemLocale

// Module 642 (getSystemLocale)
const result = require("set").fileFinishedImporting("../discord_common/js/packages/i18n/getSystemLocale.tsx");

export const getSystemLocale = function getSystemLocale() {
  const tmp = require(27) /* get ActivityIndicator */;
  if ("android" === tmp.Platform.OS) {
    let LocalizationManager = require(643) /* enforcing */.default;
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
