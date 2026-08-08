// Module ID: 7445
// Function ID: 7446
// Name: openBlockedPaymentsCountryActionSheet
// Dependencies: [4271, 7446, 1988, 2]
// Exports: default

// Module 7445 (openBlockedPaymentsCountryActionSheet)
const result = require("asyncRequireImpl").fileFinishedImporting("modules/billing/native/openBlockedPaymentsCountryActionSheet.tsx");

export default function openBlockedPaymentsCountryActionSheet() {
  importDefault(4271).hideActionSheet();
  const obj = importDefault(4271);
  importDefault(4271).openLazy(require(1988) /* asyncRequireImpl */(7446, dependencyMap.paths), "BlockedPaymentsCountryActionSheet");
};
