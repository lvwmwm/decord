// Module ID: 14617
// Function ID: 110257
// Name: getDeviceCountry
// Dependencies: []
// Exports: getDeviceCountry

// Module 14617 (getDeviceCountry)
const NativeModules = require(dependencyMap[0]).NativeModules;
const _module = require(dependencyMap[3]);
const result = _module.fileFinishedImporting("modules/auth/native/components/utils/getDeviceCountry.tsx");

export const getDeviceCountry = function getDeviceCountry() {
  if (obj.isAndroid()) {
    let LocalizationManager = require(dependencyMap[2]).default;
  } else {
    LocalizationManager = NativeModules.LocalizationManager;
  }
  let Language;
  if (null != LocalizationManager) {
    Language = LocalizationManager.getConstants().Language;
  }
  if (null == Language) {
    return null;
  } else {
    const parts = Language.split("-");
    let formatted = null;
    if (parts.length >= 2) {
      formatted = parts[parts.length - 1].toUpperCase();
      const str2 = parts[parts.length - 1];
    }
    return formatted;
  }
  const obj = require(dependencyMap[1]);
};
