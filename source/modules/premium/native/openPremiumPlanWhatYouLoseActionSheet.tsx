// Module ID: 7622
// Function ID: 7623
// Name: openPremiumPlanWhatYouLoseActionSheet
// Dependencies: [4271, 7623, 2007, 2]
// Exports: default

// Module 7622 (openPremiumPlanWhatYouLoseActionSheet)
const result = require("asyncRequireImpl").fileFinishedImporting("modules/premium/native/openPremiumPlanWhatYouLoseActionSheet.tsx");

export default function openPremiumPlanWhatYouLoseActionSheet(arg0) {
  importDefault(4271).hideActionSheet();
  const obj = importDefault(4271);
  importDefault(4271).openLazy(require(2007) /* asyncRequireImpl */(7623, dependencyMap.paths), "PremiumPlanWhatYouLoseActionSheet", arg0);
};
