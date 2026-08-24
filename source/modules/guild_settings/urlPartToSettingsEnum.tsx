// Module ID: 4495
// Function ID: 4496
// Name: urlPartToSettingsEnum
// Dependencies: [2]
// Exports: default

// Module 4495 (urlPartToSettingsEnum)
import set from "set" /* 2 */;

const result = set.fileFinishedImporting("modules/guild_settings/urlPartToSettingsEnum.tsx");

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
