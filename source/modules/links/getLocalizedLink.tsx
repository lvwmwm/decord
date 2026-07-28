// Module ID: 3777
// Function ID: 28689
// Name: getLocalizedLink
// Dependencies: [1212, 2]
// Exports: default

// Module 3777 (getLocalizedLink)
const result = require("set").fileFinishedImporting("modules/links/getLocalizedLink.tsx");

export default function getLocalizedLink(arg0) {
  const formatted = require(1212) /* getSystemLocale */.intl.currentLocale.toLowerCase();
  return formatted in arg0 ? arg0[formatted] : arg0.default;
};
