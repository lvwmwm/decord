// Module ID: 4074
// Function ID: 4075
// Name: getLocalizedLink
// Dependencies: [1236, 2]
// Exports: default

// Module 4074 (getLocalizedLink)
import set from "set" /* 2 */;
import getSystemLocale from "getSystemLocale" /* 1236 */;

const result = set.fileFinishedImporting("modules/links/getLocalizedLink.tsx");

export default function getLocalizedLink(arg0) {
  const formatted = getSystemLocale.intl.currentLocale.toLowerCase();
  return formatted in arg0 ? arg0[formatted] : arg0.default;
};
