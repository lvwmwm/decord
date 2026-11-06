// Module ID: 19789
// Function ID: 19790
// Name: improperGetEnglishIntlMessageText
// Dependencies: [1113, 1152, 2]
// Exports: improperGetEnglishIntlMessageText

// Module 19789 (improperGetEnglishIntlMessageText)
import intl from "intl" /* 1113 */;
import _mod1152 from "module_1152" /* 1152 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("intl/improperGetEnglishIntlMessageText.tsx");

export function improperGetEnglishIntlMessageText(CALL_FEEDBACK_OPTION_OTHER) {
  let intl;
  let t;
  ({ intl, t } = intl);
  intl;
  const obj = _mod1152;
  intl.currentLocale = intl.currentLocale;
  return intl.string(t[obj.runtimeHashMessageKey(obj, CALL_FEEDBACK_OPTION_OTHER)]);
}
