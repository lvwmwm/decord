// Module ID: 7490
// Function ID: 7491
// Name: openBlockedPaymentsCountryActionSheet
// Dependencies: [4310, 7491, 2007, 2]
// Exports: default

// Module 7490 (openBlockedPaymentsCountryActionSheet)
const result = require("asyncRequireImpl").fileFinishedImporting("modules/billing/native/openBlockedPaymentsCountryActionSheet.tsx");

export default function openBlockedPaymentsCountryActionSheet() {
  importDefault(4310).hideActionSheet();
  const obj = importDefault(4310);
  importDefault(4310).openLazy(require(2007) /* asyncRequireImpl */(7491, dependencyMap.paths), "BlockedPaymentsCountryActionSheet");
};
