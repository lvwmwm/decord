// Module ID: 4788
// Function ID: 4789
// Name: getLocalizedLink
// Dependencies: [1126, 2]
// Exports: default

// Module 4788 (getLocalizedLink)
import intl from "intl" /* 1126 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/links/getLocalizedLink.tsx");

export default function getLocalizedLink(arg0) {
  const str = intl.intl.currentLocale;
  const formatted = str.toLowerCase();
  return formatted in arg0 ? arg0[formatted] : arg0.default;
};
