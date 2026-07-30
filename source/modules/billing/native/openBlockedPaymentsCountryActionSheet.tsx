// Module ID: 6353
// Function ID: 6354
// Name: openBlockedPaymentsCountryActionSheet
// Dependencies: [4157, 6354, 1959, 2]
// Exports: default

// Module 6353 (openBlockedPaymentsCountryActionSheet)
const result = require("asyncRequireImpl").fileFinishedImporting("modules/billing/native/openBlockedPaymentsCountryActionSheet.tsx");

export default function openBlockedPaymentsCountryActionSheet() {
  importDefault(4157).hideActionSheet();
  const obj = importDefault(4157);
  importDefault(4157).openLazy(require(1959) /* asyncRequireImpl */(6354, dependencyMap.paths), "BlockedPaymentsCountryActionSheet");
};
