// Module ID: 16309
// Function ID: 16310
// Name: getDeviceCountry
// Dependencies: [1120, 2]
// Exports: getDeviceCountry

// Module 16309 (getDeviceCountry)
import NativeDeviceLocaleModule from "NativeDeviceLocaleModule" /* 1120 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/auth/native/components/utils/getDeviceCountry.tsx");

export const getDeviceCountry = function getDeviceCountry() {
  const _default = NativeDeviceLocaleModule.default;
  let Language;
  if (_default != null) {
    Language = _default.getConstants().Language;
  }
  if (null == Language) {
    return null;
  } else {
    const parts = Language.split("-");
    let formatted = null;
    if (parts.length >= 2) {
      formatted = parts[parts.length - 1].toUpperCase();
    }
    return formatted;
  }
};
