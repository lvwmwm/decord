// Module ID: 6532
// Function ID: 6533
// Name: openPremiumPlanWhatYouLoseActionSheet
// Dependencies: [4157, 6533, 1959, 2]
// Exports: default

// Module 6532 (openPremiumPlanWhatYouLoseActionSheet)
const result = require("asyncRequireImpl").fileFinishedImporting("modules/premium/native/openPremiumPlanWhatYouLoseActionSheet.tsx");

export default function openPremiumPlanWhatYouLoseActionSheet(arg0) {
  importDefault(4157).hideActionSheet();
  const obj = importDefault(4157);
  importDefault(4157).openLazy(require(1959) /* asyncRequireImpl */(6533, dependencyMap.paths), "PremiumPlanWhatYouLoseActionSheet", arg0);
};
