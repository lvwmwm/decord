// Module ID: 5117
// Function ID: 5118
// Name: getLocalizedLink
// Dependencies: [1113, 2]
// Exports: default

// Module 5117 (getLocalizedLink)
import intl from "intl" /* 1113 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/links/getLocalizedLink.tsx");

export default function getLocalizedLink(arg0) {
  const str = intl.intl.currentLocale;
  const formatted = str.toLowerCase();
  return formatted in arg0 ? arg0[formatted] : arg0.default;
};
