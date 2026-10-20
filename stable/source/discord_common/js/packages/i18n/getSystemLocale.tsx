// Module ID: 1361
// Function ID: 1362
// Name: react-native
// Dependencies: [1127, 2]
// Exports: getSystemLocale

// Module 1361 (react-native)
import react_native from "react-native" /* 1127 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("../discord_common/js/packages/i18n/getSystemLocale.tsx");

export const getSystemLocale = function getSystemLocale() {
  const _default = react_native.default;
  let str;
  if (null != _default) {
    str = _default.getConstants().Language;
  }
  if (str == null) {
    str = "";
  }
  return str;
};
