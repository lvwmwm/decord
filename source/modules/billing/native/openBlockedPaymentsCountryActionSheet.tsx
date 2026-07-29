// Module ID: 6356
// Function ID: 6357
// Name: openBlockedPaymentsCountryActionSheet
// Dependencies: [4157, 6357, 1959, 2]
// Exports: default

// Module 6356 (openBlockedPaymentsCountryActionSheet)
const result = require("asyncRequireImpl").fileFinishedImporting("modules/billing/native/openBlockedPaymentsCountryActionSheet.tsx");

export default function openBlockedPaymentsCountryActionSheet() {
  importDefault(4157).hideActionSheet();
  const obj = importDefault(4157);
  importDefault(4157).openLazy(require(1959) /* asyncRequireImpl */(6357, dependencyMap.paths), "BlockedPaymentsCountryActionSheet");
};
