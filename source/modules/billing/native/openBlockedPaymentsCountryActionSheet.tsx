// Module ID: 7729
// Function ID: 7730
// Name: openBlockedPaymentsCountryActionSheet
// Dependencies: [4342, 7730, 2007, 2]
// Exports: default

// Module 7729 (openBlockedPaymentsCountryActionSheet)
const result = require("asyncRequireImpl").fileFinishedImporting("modules/billing/native/openBlockedPaymentsCountryActionSheet.tsx");

export default function openBlockedPaymentsCountryActionSheet() {
  importDefault(4342).hideActionSheet();
  const obj = importDefault(4342);
  importDefault(4342).openLazy(require(2007) /* asyncRequireImpl */(7730, dependencyMap.paths), "BlockedPaymentsCountryActionSheet");
};
