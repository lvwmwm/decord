// Module ID: 4382
// Function ID: 4383
// Name: getLocalizedLink
// Dependencies: [1119, 2]
// Exports: default

// Module 4382 (getLocalizedLink)
import util from "util" /* 1119 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/links/getLocalizedLink.tsx");

export default function getLocalizedLink(arg0) {
  const formatted = util.intl.currentLocale.toLowerCase();
  return formatted in arg0 ? arg0[formatted] : arg0.default;
};
