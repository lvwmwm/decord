// Module ID: 7385
// Function ID: 7386
// Name: openBlockedPaymentsCountryActionSheet
// Dependencies: [4270, 7386, 1988, 2]
// Exports: default

// Module 7385 (openBlockedPaymentsCountryActionSheet)
const result = require("asyncRequireImpl").fileFinishedImporting("modules/billing/native/openBlockedPaymentsCountryActionSheet.tsx");

export default function openBlockedPaymentsCountryActionSheet() {
  importDefault(4270).hideActionSheet();
  const obj = importDefault(4270);
  importDefault(4270).openLazy(require(1988) /* asyncRequireImpl */(7386, dependencyMap.paths), "BlockedPaymentsCountryActionSheet");
};
