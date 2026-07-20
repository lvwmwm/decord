// Module ID: 7217
// Function ID: 58164
// Name: openBlockedPaymentsCountryActionSheet
// Dependencies: []
// Exports: default

// Module 7217 (openBlockedPaymentsCountryActionSheet)
const _module = require(dependencyMap[3]);
const result = _module.fileFinishedImporting("modules/billing/native/openBlockedPaymentsCountryActionSheet.tsx");

export default function openBlockedPaymentsCountryActionSheet() {
  importDefault(dependencyMap[0]).hideActionSheet();
  const obj = importDefault(dependencyMap[0]);
  importDefault(dependencyMap[0]).openLazy(require(dependencyMap[2])(dependencyMap[1], dependencyMap.paths), "BlockedPaymentsCountryActionSheet");
};
