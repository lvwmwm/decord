// Module ID: 7686
// Function ID: 7687
// Name: openPremiumPlanWhatYouLoseActionSheet
// Dependencies: [4310, 7687, 2007, 2]
// Exports: default

// Module 7686 (openPremiumPlanWhatYouLoseActionSheet)
const result = require("asyncRequireImpl").fileFinishedImporting("modules/premium/native/openPremiumPlanWhatYouLoseActionSheet.tsx");

export default function openPremiumPlanWhatYouLoseActionSheet(arg0) {
  importDefault(4310).hideActionSheet();
  const obj = importDefault(4310);
  importDefault(4310).openLazy(require(2007) /* asyncRequireImpl */(7687, dependencyMap.paths), "PremiumPlanWhatYouLoseActionSheet", arg0);
};
