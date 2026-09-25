// Module ID: 16303
// Function ID: 16304
// Name: intl/migration
// Dependencies: [1115, 1154, 2]
// Exports: improperGetEnglishIntlMessageText

// Module 16303 (intl/migration)
import util from "util" /* 1115 */;
import _mod1154 from "module_1154" /* 1154 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("intl/migration.tsx");

export const improperGetEnglishIntlMessageText = function newGetEnglishMessageText(code) {
  ({ intl, t } = util);
  const obj = _mod1154;
  intl.currentLocale = intl.currentLocale;
  return intl.string(t[obj.runtimeHashMessageKey(obj, code)]);
};
