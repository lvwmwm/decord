// Module ID: 1350
// Function ID: 1351
// Name: react-native
// Dependencies: [1113, 2]
// Exports: getSystemLocale

// Module 1350 (react-native)
import react_native from "react-native" /* 1113 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("../discord_common/js/packages/i18n/getSystemLocale.tsx");

export function getSystemLocale() {
  const _default = react_native.default;
  let str;
  if (null != _default) {
    str = _default.getConstants().Language;
  }
  if (str == null) {
    str = "";
  }
  return str;
}
