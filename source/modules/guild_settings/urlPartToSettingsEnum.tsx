// Module ID: 13112
// Function ID: 13113
// Name: urlPartToSettingsEnum
// Dependencies: [2]
// Exports: default

// Module 13112 (urlPartToSettingsEnum)
const result = require("set").fileFinishedImporting("modules/guild_settings/urlPartToSettingsEnum.tsx");

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
