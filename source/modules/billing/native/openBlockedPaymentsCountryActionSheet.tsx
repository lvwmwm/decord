// Module ID: 6359
// Function ID: 6360
// Name: openBlockedPaymentsCountryActionSheet
// Dependencies: [4161, 6360, 1959, 2]
// Exports: default

// Module 6359 (openBlockedPaymentsCountryActionSheet)
const result = require("asyncRequireImpl").fileFinishedImporting("modules/billing/native/openBlockedPaymentsCountryActionSheet.tsx");

export default function openBlockedPaymentsCountryActionSheet() {
  importDefault(4161).hideActionSheet();
  const obj = importDefault(4161);
  importDefault(4161).openLazy(require(1959) /* asyncRequireImpl */(6360, dependencyMap.paths), "BlockedPaymentsCountryActionSheet");
};
