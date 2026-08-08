// Module ID: 7620
// Function ID: 7621
// Name: openPremiumPlanWhatYouLoseActionSheet
// Dependencies: [4271, 7621, 1988, 2]
// Exports: default

// Module 7620 (openPremiumPlanWhatYouLoseActionSheet)
const result = require("asyncRequireImpl").fileFinishedImporting("modules/premium/native/openPremiumPlanWhatYouLoseActionSheet.tsx");

export default function openPremiumPlanWhatYouLoseActionSheet(arg0) {
  importDefault(4271).hideActionSheet();
  const obj = importDefault(4271);
  importDefault(4271).openLazy(require(1988) /* asyncRequireImpl */(7621, dependencyMap.paths), "PremiumPlanWhatYouLoseActionSheet", arg0);
};
