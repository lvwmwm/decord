// Module ID: 19728
// Function ID: 19729
// Name: improperGetEnglishIntlMessageText
// Dependencies: [1112, 1151, 2]
// Exports: improperGetEnglishIntlMessageText

// Module 19728 (improperGetEnglishIntlMessageText)
import intl from "intl" /* 1112 */;
import _mod1151 from "module_1151" /* 1151 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("intl/improperGetEnglishIntlMessageText.tsx");

export function improperGetEnglishIntlMessageText(CALL_FEEDBACK_OPTION_OTHER) {
  let intl;
  let t;
  ({ intl, t } = intl);
  intl;
  const obj = _mod1151;
  intl.currentLocale = intl.currentLocale;
  return intl.string(t[obj.runtimeHashMessageKey(obj, CALL_FEEDBACK_OPTION_OTHER)]);
}
