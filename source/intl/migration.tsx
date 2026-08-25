// Module ID: 16704
// Function ID: 16705
// Name: newGetEnglishMessageText
// Dependencies: [1236, 1274, 2]
// Exports: improperGetEnglishIntlMessageText

// Module 16704 (newGetEnglishMessageText)
import set from "set" /* 2 */;
import getSystemLocale from "getSystemLocale" /* 1236 */;
import _mod1274 from "module_1274" /* 1274 */;

const result = set.fileFinishedImporting("intl/migration.tsx");

export const improperGetEnglishIntlMessageText = function newGetEnglishMessageText(code) {
  ({ intl, t } = getSystemLocale);
  const obj = _mod1274;
  intl.currentLocale = intl.currentLocale;
  return intl.string(t[obj.runtimeHashMessageKey(obj, code)]);
};
