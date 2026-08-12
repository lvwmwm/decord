// Module ID: 7661
// Function ID: 7662
// Name: openPremiumPlanWhatYouLoseActionSheet
// Dependencies: [4312, 7662, 2007, 2]
// Exports: default

// Module 7661 (openPremiumPlanWhatYouLoseActionSheet)
const result = require("asyncRequireImpl").fileFinishedImporting("modules/premium/native/openPremiumPlanWhatYouLoseActionSheet.tsx");

export default function openPremiumPlanWhatYouLoseActionSheet(arg0) {
  importDefault(4312).hideActionSheet();
  const obj = importDefault(4312);
  importDefault(4312).openLazy(require(2007) /* asyncRequireImpl */(7662, dependencyMap.paths), "PremiumPlanWhatYouLoseActionSheet", arg0);
};
