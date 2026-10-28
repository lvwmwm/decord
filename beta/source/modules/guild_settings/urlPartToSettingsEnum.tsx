// Module ID: 15126
// Function ID: 15127
// Name: urlPartToSettingsEnum
// Dependencies: [2]
// Exports: default

// Module 15126 (urlPartToSettingsEnum)
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
