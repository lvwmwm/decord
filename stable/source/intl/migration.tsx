// Module ID: 17479
// Function ID: 17480
// Name: intl/migration
// Dependencies: [1114, 1153, 2]
// Exports: improperGetEnglishIntlMessageText

// Module 17479 (intl/migration)
import util from "util" /* 1114 */;
import _mod1153 from "module_1153" /* 1153 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("intl/migration.tsx");

export const improperGetEnglishIntlMessageText = function newGetEnglishMessageText(code) {
  ({ intl, t } = util);
  const obj = _mod1153;
  intl.currentLocale = intl.currentLocale;
  return intl.string(t[obj.runtimeHashMessageKey(obj, code)]);
};
