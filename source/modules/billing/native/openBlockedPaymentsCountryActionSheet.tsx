// Module ID: 7338
// Function ID: 7339
// Name: openBlockedPaymentsCountryActionSheet
// Dependencies: [4223, 7339, 1959, 2]
// Exports: default

// Module 7338 (openBlockedPaymentsCountryActionSheet)
const result = require("asyncRequireImpl").fileFinishedImporting("modules/billing/native/openBlockedPaymentsCountryActionSheet.tsx");

export default function openBlockedPaymentsCountryActionSheet() {
  importDefault(4223).hideActionSheet();
  const obj = importDefault(4223);
  importDefault(4223).openLazy(require(1959) /* asyncRequireImpl */(7339, dependencyMap.paths), "BlockedPaymentsCountryActionSheet");
};
