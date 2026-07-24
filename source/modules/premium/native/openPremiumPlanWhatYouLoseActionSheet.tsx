// Module ID: 7402
// Function ID: 59566
// Name: openPremiumPlanWhatYouLoseActionSheet
// Dependencies: [4098, 7403, 1934, 2]
// Exports: default

// Module 7402 (openPremiumPlanWhatYouLoseActionSheet)
const result = require("maybeLoadBundle").fileFinishedImporting("modules/premium/native/openPremiumPlanWhatYouLoseActionSheet.tsx");

export default function openPremiumPlanWhatYouLoseActionSheet(arg0) {
  importDefault(4098).hideActionSheet();
  const obj = importDefault(4098);
  importDefault(4098).openLazy(require(1934) /* maybeLoadBundle */(7403, dependencyMap.paths), "PremiumPlanWhatYouLoseActionSheet", arg0);
};
