// Module ID: 7447
// Function ID: 7448
// Name: openBlockedPaymentsCountryActionSheet
// Dependencies: [4271, 7448, 2007, 2]
// Exports: default

// Module 7447 (openBlockedPaymentsCountryActionSheet)
const result = require("asyncRequireImpl").fileFinishedImporting("modules/billing/native/openBlockedPaymentsCountryActionSheet.tsx");

export default function openBlockedPaymentsCountryActionSheet() {
  importDefault(4271).hideActionSheet();
  const obj = importDefault(4271);
  importDefault(4271).openLazy(require(2007) /* asyncRequireImpl */(7448, dependencyMap.paths), "BlockedPaymentsCountryActionSheet");
};
