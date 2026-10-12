// Module ID: 18107
// Function ID: 18108
// Name: intl/migration
// Dependencies: [1126, 1165, 2]
// Exports: improperGetEnglishIntlMessageText

// Module 18107 (intl/migration)
import intl from "intl" /* 1126 */;
import _mod1165 from "module_1165" /* 1165 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("intl/migration.tsx");

export const improperGetEnglishIntlMessageText = function newGetEnglishMessageText(code) {
  let intl;
  let t;
  ({ intl, t } = intl);
  intl;
  const obj = _mod1165;
  intl.currentLocale = intl.currentLocale;
  return intl.string(t[obj.runtimeHashMessageKey(obj, code)]);
};
