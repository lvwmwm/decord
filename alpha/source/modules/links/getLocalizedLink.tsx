// Module ID: 4821
// Function ID: 4822
// Name: getLocalizedLink
// Dependencies: [1114, 2]
// Exports: default

// Module 4821 (getLocalizedLink)
import intl from "intl" /* 1114 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/links/getLocalizedLink.tsx");

export default function getLocalizedLink(arg0) {
  const str = intl.intl.currentLocale;
  const formatted = str.toLowerCase();
  return formatted in arg0 ? arg0[formatted] : arg0.default;
};
