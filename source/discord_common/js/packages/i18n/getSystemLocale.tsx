// Module ID: 665
// Function ID: 666
// Name: getSystemLocale
// Dependencies: [17, 666, 2]
// Exports: getSystemLocale

// Module 665 (getSystemLocale)
const result = require("set").fileFinishedImporting("../discord_common/js/packages/i18n/getSystemLocale.tsx");

export const getSystemLocale = function getSystemLocale() {
  const tmp3 = require(17) /* get ActivityIndicator */;
  if ("android" === tmp3.Platform.OS) {
    let LocalizationManager = require(666) /* enforcing */.default;
  } else {
    LocalizationManager = tmp3.NativeModules.LocalizationManager;
  }
  let str;
  if (null != LocalizationManager) {
    str = LocalizationManager.getConstants().Language;
  }
  if (str == null) {
    str = "";
  }
  return str;
};
