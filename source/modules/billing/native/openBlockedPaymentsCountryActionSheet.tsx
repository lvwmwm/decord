// Module ID: 7486
// Function ID: 7487
// Name: openBlockedPaymentsCountryActionSheet
// Dependencies: [4312, 7487, 2007, 2]
// Exports: default

// Module 7486 (openBlockedPaymentsCountryActionSheet)
const result = require("asyncRequireImpl").fileFinishedImporting("modules/billing/native/openBlockedPaymentsCountryActionSheet.tsx");

export default function openBlockedPaymentsCountryActionSheet() {
  importDefault(4312).hideActionSheet();
  const obj = importDefault(4312);
  importDefault(4312).openLazy(require(2007) /* asyncRequireImpl */(7487, dependencyMap.paths), "BlockedPaymentsCountryActionSheet");
};
