// Module ID: 3805
// Function ID: 3806
// Name: getLocalizedLink
// Dependencies: [1236, 2]
// Exports: default

// Module 3805 (getLocalizedLink)
const result = require("set").fileFinishedImporting("modules/links/getLocalizedLink.tsx");

export default function getLocalizedLink(arg0) {
  const formatted = require(1236) /* getSystemLocale */.intl.currentLocale.toLowerCase();
  return formatted in arg0 ? arg0[formatted] : arg0.default;
};
