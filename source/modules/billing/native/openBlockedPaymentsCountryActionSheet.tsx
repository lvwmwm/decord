// Module ID: 7354
// Function ID: 7355
// Name: openBlockedPaymentsCountryActionSheet
// Dependencies: [4223, 7355, 1959, 2]
// Exports: default

// Module 7354 (openBlockedPaymentsCountryActionSheet)
const result = require("asyncRequireImpl").fileFinishedImporting("modules/billing/native/openBlockedPaymentsCountryActionSheet.tsx");

export default function openBlockedPaymentsCountryActionSheet() {
  importDefault(4223).hideActionSheet();
  const obj = importDefault(4223);
  importDefault(4223).openLazy(require(1959) /* asyncRequireImpl */(7355, dependencyMap.paths), "BlockedPaymentsCountryActionSheet");
};
