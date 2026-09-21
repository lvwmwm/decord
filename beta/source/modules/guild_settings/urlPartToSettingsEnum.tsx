// Module ID: 14118
// Function ID: 14119
// Name: urlPartToSettingsEnum
// Dependencies: [2]
// Exports: default

// Module 14118 (urlPartToSettingsEnum)
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/guild_settings/urlPartToSettingsEnum.tsx");

export default function urlPartToSettingsEnum(arg0, str) {
  let formatted;
  if (str != null) {
    const str2 = str.replace(/-/g, "_");
    if (str2 != null) {
      formatted = str2.toUpperCase();
    }
  }
  if (null != formatted) {
    if (formatted in arg0) {
      return arg0[formatted];
    }
  }
};
