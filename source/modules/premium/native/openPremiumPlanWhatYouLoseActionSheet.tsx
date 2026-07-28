// Module ID: 6514
// Function ID: 58075
// Name: openPremiumPlanWhatYouLoseActionSheet
// Dependencies: [4133, 6515, 1935, 2]
// Exports: default

// Module 6514 (openPremiumPlanWhatYouLoseActionSheet)
const result = require("maybeLoadBundle").fileFinishedImporting("modules/premium/native/openPremiumPlanWhatYouLoseActionSheet.tsx");

export default function openPremiumPlanWhatYouLoseActionSheet(arg0) {
  importDefault(4133).hideActionSheet();
  const obj = importDefault(4133);
  importDefault(4133).openLazy(require(1935) /* maybeLoadBundle */(6515, dependencyMap.paths), "PremiumPlanWhatYouLoseActionSheet", arg0);
};
