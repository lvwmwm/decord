// Module ID: 3740
// Function ID: 28569
// Name: getLocalizedLink
// Dependencies: []
// Exports: default

// Module 3740 (getLocalizedLink)
const _module = require(dependencyMap[1]);
const result = _module.fileFinishedImporting("modules/links/getLocalizedLink.tsx");

export default function getLocalizedLink(arg0) {
  const formatted = require(dependencyMap[0]).intl.currentLocale.toLowerCase();
  return formatted in arg0 ? arg0[formatted] : arg0.default;
};
