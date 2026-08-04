// Module ID: 7541
// Function ID: 7542
// Name: openPremiumPlanWhatYouLoseActionSheet
// Dependencies: [4253, 7542, 1959, 2]
// Exports: default

// Module 7541 (openPremiumPlanWhatYouLoseActionSheet)
const result = require("asyncRequireImpl").fileFinishedImporting("modules/premium/native/openPremiumPlanWhatYouLoseActionSheet.tsx");

export default function openPremiumPlanWhatYouLoseActionSheet(arg0) {
  importDefault(4253).hideActionSheet();
  const obj = importDefault(4253);
  importDefault(4253).openLazy(require(1959) /* asyncRequireImpl */(7542, dependencyMap.paths), "PremiumPlanWhatYouLoseActionSheet", arg0);
};
