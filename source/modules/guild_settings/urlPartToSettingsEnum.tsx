// Module ID: 12908
// Function ID: 100193
// Name: urlPartToSettingsEnum
// Dependencies: [2]
// Exports: default

// Module 12908 (urlPartToSettingsEnum)
const result = require("set").fileFinishedImporting("modules/guild_settings/urlPartToSettingsEnum.tsx");

export default function urlPartToSettingsEnum(arg0, str) {
  let formatted;
  if (null != str) {
    const str2 = str.replace(/-/g, "_");
    if (null != str2) {
      formatted = str2.toUpperCase();
    }
  }
  if (null != formatted) {
    if (formatted in arg0) {
      return arg0[formatted];
    }
  }
};
