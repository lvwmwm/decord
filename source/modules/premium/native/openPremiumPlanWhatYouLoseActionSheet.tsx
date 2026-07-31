// Module ID: 6538
// Function ID: 6539
// Name: openPremiumPlanWhatYouLoseActionSheet
// Dependencies: [4161, 6539, 1959, 2]
// Exports: default

// Module 6538 (openPremiumPlanWhatYouLoseActionSheet)
const result = require("asyncRequireImpl").fileFinishedImporting("modules/premium/native/openPremiumPlanWhatYouLoseActionSheet.tsx");

export default function openPremiumPlanWhatYouLoseActionSheet(arg0) {
  importDefault(4161).hideActionSheet();
  const obj = importDefault(4161);
  importDefault(4161).openLazy(require(1959) /* asyncRequireImpl */(6539, dependencyMap.paths), "PremiumPlanWhatYouLoseActionSheet", arg0);
};
