// Module ID: 7511
// Function ID: 7512
// Name: openBlockedPaymentsCountryActionSheet
// Dependencies: [4310, 7512, 2007, 2]
// Exports: default

// Module 7511 (openBlockedPaymentsCountryActionSheet)
const result = require("asyncRequireImpl").fileFinishedImporting("modules/billing/native/openBlockedPaymentsCountryActionSheet.tsx");

export default function openBlockedPaymentsCountryActionSheet() {
  importDefault(4310).hideActionSheet();
  const obj = importDefault(4310);
  importDefault(4310).openLazy(require(2007) /* asyncRequireImpl */(7512, dependencyMap.paths), "BlockedPaymentsCountryActionSheet");
};
