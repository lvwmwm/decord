// Module ID: 7400
// Function ID: 59531
// Name: openPremiumPlanWhatYouLoseActionSheet
// Dependencies: [4098, 7401, 1934, 2]
// Exports: default

// Module 7400 (openPremiumPlanWhatYouLoseActionSheet)
const result = require("maybeLoadBundle").fileFinishedImporting("modules/premium/native/openPremiumPlanWhatYouLoseActionSheet.tsx");

export default function openPremiumPlanWhatYouLoseActionSheet(arg0) {
  importDefault(4098).hideActionSheet();
  const obj = importDefault(4098);
  importDefault(4098).openLazy(require(1934) /* maybeLoadBundle */(7401, dependencyMap.paths), "PremiumPlanWhatYouLoseActionSheet", arg0);
};
