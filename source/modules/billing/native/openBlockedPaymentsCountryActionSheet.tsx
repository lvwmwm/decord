// Module ID: 7227
// Function ID: 58232
// Name: openBlockedPaymentsCountryActionSheet
// Dependencies: [4098, 7228, 1934, 2]
// Exports: default

// Module 7227 (openBlockedPaymentsCountryActionSheet)
const result = require("maybeLoadBundle").fileFinishedImporting("modules/billing/native/openBlockedPaymentsCountryActionSheet.tsx");

export default function openBlockedPaymentsCountryActionSheet() {
  importDefault(4098).hideActionSheet();
  const obj = importDefault(4098);
  importDefault(4098).openLazy(require(1934) /* maybeLoadBundle */(7228, dependencyMap.paths), "BlockedPaymentsCountryActionSheet");
};
