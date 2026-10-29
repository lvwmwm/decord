// Module ID: 19345
// Function ID: 19346
// Name: improperGetEnglishIntlMessageText
// Dependencies: [1125, 1164, 2]
// Exports: improperGetEnglishIntlMessageText

// Module 19345 (improperGetEnglishIntlMessageText)
import intl from "intl" /* 1125 */;
import _mod1164 from "module_1164" /* 1164 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("intl/improperGetEnglishIntlMessageText.tsx");

export function improperGetEnglishIntlMessageText(CALL_FEEDBACK_OPTION_OTHER) {
  let intl;
  let t;
  ({ intl, t } = intl);
  intl;
  const obj = _mod1164;
  intl.currentLocale = intl.currentLocale;
  return intl.string(t[obj.runtimeHashMessageKey(obj, CALL_FEEDBACK_OPTION_OTHER)]);
}
