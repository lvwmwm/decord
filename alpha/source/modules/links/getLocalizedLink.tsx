// Module ID: 4791
// Function ID: 4792
// Name: getLocalizedLink
// Dependencies: [1128, 2]
// Exports: default

// Module 4791 (getLocalizedLink)
import intl from "intl" /* 1128 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/links/getLocalizedLink.tsx");

export default function getLocalizedLink(arg0) {
  const str = intl.intl.currentLocale;
  const formatted = str.toLowerCase();
  return formatted in arg0 ? arg0[formatted] : arg0.default;
};
