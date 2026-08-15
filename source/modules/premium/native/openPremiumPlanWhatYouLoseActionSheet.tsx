// Module ID: 7904
// Function ID: 7905
// Name: openPremiumPlanWhatYouLoseActionSheet
// Dependencies: [4342, 7905, 2007, 2]
// Exports: default

// Module 7904 (openPremiumPlanWhatYouLoseActionSheet)
const result = require("asyncRequireImpl").fileFinishedImporting("modules/premium/native/openPremiumPlanWhatYouLoseActionSheet.tsx");

export default function openPremiumPlanWhatYouLoseActionSheet(arg0) {
  importDefault(4342).hideActionSheet();
  const obj = importDefault(4342);
  importDefault(4342).openLazy(require(2007) /* asyncRequireImpl */(7905, dependencyMap.paths), "PremiumPlanWhatYouLoseActionSheet", arg0);
};
