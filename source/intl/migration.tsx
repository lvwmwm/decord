// Module ID: 16035
// Function ID: 124105
// Name: newGetEnglishMessageText
// Dependencies: [1212, 1250, 2]
// Exports: improperGetEnglishIntlMessageText

// Module 16035 (newGetEnglishMessageText)
const result = require("set").fileFinishedImporting("intl/migration.tsx");

export const improperGetEnglishIntlMessageText = function newGetEnglishMessageText(code) {
  const tmp = require(1212) /* getSystemLocale */;
  const intl = tmp.intl;
  const obj = require(1250);
  intl.currentLocale = intl.currentLocale;
  return intl.string(tmp.t[obj.runtimeHashMessageKey(obj, code)]);
};
