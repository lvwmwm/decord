// Module ID: 3742
// Function ID: 28575
// Name: getLocalizedLink
// Dependencies: [1212, 2]
// Exports: default

// Module 3742 (getLocalizedLink)
const result = require("set").fileFinishedImporting("modules/links/getLocalizedLink.tsx");

export default function getLocalizedLink(arg0) {
  const formatted = require(1212) /* getSystemLocale */.intl.currentLocale.toLowerCase();
  return formatted in arg0 ? arg0[formatted] : arg0.default;
};
