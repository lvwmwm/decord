// Module ID: 6478
// Function ID: 57986
// Name: openPremiumPlanWhatYouLoseActionSheet
// Dependencies: [4099, 6479, 1935, 2]
// Exports: default

// Module 6478 (openPremiumPlanWhatYouLoseActionSheet)
const result = require("maybeLoadBundle").fileFinishedImporting("modules/premium/native/openPremiumPlanWhatYouLoseActionSheet.tsx");

export default function openPremiumPlanWhatYouLoseActionSheet(arg0) {
  importDefault(4099).hideActionSheet();
  const obj = importDefault(4099);
  importDefault(4099).openLazy(require(1935) /* maybeLoadBundle */(6479, dependencyMap.paths), "PremiumPlanWhatYouLoseActionSheet", arg0);
};
