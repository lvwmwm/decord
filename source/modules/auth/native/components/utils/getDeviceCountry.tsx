// Module ID: 14750
// Function ID: 112518
// Name: getDeviceCountry
// Dependencies: [27, 477, 643, 2]
// Exports: getDeviceCountry

// Module 14750 (getDeviceCountry)
import { NativeModules } from "get ActivityIndicator";

const result = require("enforcing").fileFinishedImporting("modules/auth/native/components/utils/getDeviceCountry.tsx");

export const getDeviceCountry = function getDeviceCountry() {
  if (obj.isAndroid()) {
    let LocalizationManager = require(643) /* enforcing */.default;
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
  obj = require(477) /* set */;
};
