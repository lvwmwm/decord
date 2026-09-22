// Module ID: 1336
// Function ID: 1337
// Name: getSystemLocale
// Dependencies: [1115, 2]
// Exports: getSystemLocale

// Module 1336 (getSystemLocale)
import NativeDeviceLocaleModule from "NativeDeviceLocaleModule" /* 1115 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("../discord_common/js/packages/i18n/getSystemLocale.tsx");

export const getSystemLocale = function getSystemLocale() {
  const _default = NativeDeviceLocaleModule.default;
  let str;
  if (null != _default) {
    str = _default.getConstants().Language;
  }
  if (str == null) {
    str = "";
  }
  return str;
};
