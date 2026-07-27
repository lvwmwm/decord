// Module ID: 6299
// Function ID: 56710
// Name: openBlockedPaymentsCountryActionSheet
// Dependencies: [4099, 6300, 1935, 2]
// Exports: default

// Module 6299 (openBlockedPaymentsCountryActionSheet)
const result = require("maybeLoadBundle").fileFinishedImporting("modules/billing/native/openBlockedPaymentsCountryActionSheet.tsx");

export default function openBlockedPaymentsCountryActionSheet() {
  importDefault(4099).hideActionSheet();
  const obj = importDefault(4099);
  importDefault(4099).openLazy(require(1935) /* maybeLoadBundle */(6300, dependencyMap.paths), "BlockedPaymentsCountryActionSheet");
};
