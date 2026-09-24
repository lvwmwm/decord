// Module ID: 17031
// Function ID: 17032
// Name: intl/migration
// Dependencies: [1119, 1158, 2]
// Exports: improperGetEnglishIntlMessageText

// Module 17031 (intl/migration)
import util from "util" /* 1119 */;
import _mod1158 from "module_1158" /* 1158 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("intl/migration.tsx");

export const improperGetEnglishIntlMessageText = function newGetEnglishMessageText(code) {
  ({ intl, t } = util);
  const obj = _mod1158;
  intl.currentLocale = intl.currentLocale;
  return intl.string(t[obj.runtimeHashMessageKey(obj, code)]);
};
