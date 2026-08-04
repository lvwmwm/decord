// Module ID: 7366
// Function ID: 7367
// Name: openBlockedPaymentsCountryActionSheet
// Dependencies: [4253, 7367, 1959, 2]
// Exports: default

// Module 7366 (openBlockedPaymentsCountryActionSheet)
const result = require("asyncRequireImpl").fileFinishedImporting("modules/billing/native/openBlockedPaymentsCountryActionSheet.tsx");

export default function openBlockedPaymentsCountryActionSheet() {
  importDefault(4253).hideActionSheet();
  const obj = importDefault(4253);
  importDefault(4253).openLazy(require(1959) /* asyncRequireImpl */(7367, dependencyMap.paths), "BlockedPaymentsCountryActionSheet");
};
