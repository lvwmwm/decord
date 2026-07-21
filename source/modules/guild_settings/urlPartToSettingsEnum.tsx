// Module ID: 12733
// Function ID: 97659
// Name: urlPartToSettingsEnum
// Dependencies: [284214097]
// Exports: default

// Module 12733 (urlPartToSettingsEnum)
const _module = require(dependencyMap[0]);
const result = _module.fileFinishedImporting("modules/guild_settings/urlPartToSettingsEnum.tsx");

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
