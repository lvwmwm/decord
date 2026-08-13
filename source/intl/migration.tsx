// Module ID: 16508
// Function ID: 16509
// Name: newGetEnglishMessageText
// Dependencies: [1236, 1274, 2]
// Exports: improperGetEnglishIntlMessageText

// Module 16508 (newGetEnglishMessageText)
const result = require("set").fileFinishedImporting("intl/migration.tsx");

export const improperGetEnglishIntlMessageText = function newGetEnglishMessageText(code) {
  let intl;
  let t;
  ({ intl, t } = require(1236) /* getSystemLocale */);
  const obj = require(1274);
  intl.currentLocale = intl.currentLocale;
  return intl.string(t[obj.runtimeHashMessageKey(obj, code)]);
};
