// Module ID: 7529
// Function ID: 7530
// Name: openPremiumPlanWhatYouLoseActionSheet
// Dependencies: [4223, 7530, 1959, 2]
// Exports: default

// Module 7529 (openPremiumPlanWhatYouLoseActionSheet)
const result = require("asyncRequireImpl").fileFinishedImporting("modules/premium/native/openPremiumPlanWhatYouLoseActionSheet.tsx");

export default function openPremiumPlanWhatYouLoseActionSheet(arg0) {
  importDefault(4223).hideActionSheet();
  const obj = importDefault(4223);
  importDefault(4223).openLazy(require(1959) /* asyncRequireImpl */(7530, dependencyMap.paths), "PremiumPlanWhatYouLoseActionSheet", arg0);
};
