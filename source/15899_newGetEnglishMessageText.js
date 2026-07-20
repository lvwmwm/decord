// Module ID: 15899
// Function ID: 121821
// Name: newGetEnglishMessageText
// Dependencies: []
// Exports: improperGetEnglishIntlMessageText

// Module 15899 (newGetEnglishMessageText)
const _module = require(dependencyMap[2]);
const result = _module.fileFinishedImporting("intl/migration.tsx");

export const improperGetEnglishIntlMessageText = function newGetEnglishMessageText(code) {
  const tmp = require(dependencyMap[0]);
  const intl = tmp.intl;
  const obj = require(dependencyMap[1]);
  intl.currentLocale = intl.currentLocale;
  return intl.string(tmp.t[obj.runtimeHashMessageKey(obj, code)]);
};
