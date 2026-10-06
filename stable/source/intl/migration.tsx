// Module ID: 16334
// Function ID: 16335
// Name: intl/migration
// Dependencies: [1127, 1166, 2]
// Exports: improperGetEnglishIntlMessageText

// Module 16334 (intl/migration)
import intl from "intl" /* 1127 */;
import _mod1166 from "module_1166" /* 1166 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("intl/migration.tsx");

export const improperGetEnglishIntlMessageText = function newGetEnglishMessageText(code) {
  let intl;
  let t;
  ({ intl, t } = intl);
  intl;
  const obj = _mod1166;
  intl.currentLocale = intl.currentLocale;
  return intl.string(t[obj.runtimeHashMessageKey(obj, code)]);
};
