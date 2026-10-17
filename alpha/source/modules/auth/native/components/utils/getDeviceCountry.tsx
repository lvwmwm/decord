// Module ID: 17080
// Function ID: 17081
// Name: react-native
// Dependencies: [1129, 2]
// Exports: getDeviceCountry

// Module 17080 (react-native)
import react_native from "react-native" /* 1129 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/auth/native/components/utils/getDeviceCountry.tsx");

export const getDeviceCountry = function getDeviceCountry() {
  const _default = react_native.default;
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
      const str2 = parts[parts.length - 1];
      formatted = str2.toUpperCase();
    }
    return formatted;
  }
};
