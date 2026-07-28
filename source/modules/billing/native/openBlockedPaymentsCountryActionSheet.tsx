// Module ID: 6335
// Function ID: 56799
// Name: openBlockedPaymentsCountryActionSheet
// Dependencies: [4133, 6336, 1935, 2]
// Exports: default

// Module 6335 (openBlockedPaymentsCountryActionSheet)
const result = require("maybeLoadBundle").fileFinishedImporting("modules/billing/native/openBlockedPaymentsCountryActionSheet.tsx");

export default function openBlockedPaymentsCountryActionSheet() {
  importDefault(4133).hideActionSheet();
  const obj = importDefault(4133);
  importDefault(4133).openLazy(require(1935) /* maybeLoadBundle */(6336, dependencyMap.paths), "BlockedPaymentsCountryActionSheet");
};
