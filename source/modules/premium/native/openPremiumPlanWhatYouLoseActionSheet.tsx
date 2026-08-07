// Module ID: 7560
// Function ID: 7561
// Name: openPremiumPlanWhatYouLoseActionSheet
// Dependencies: [4270, 7561, 1988, 2]
// Exports: default

// Module 7560 (openPremiumPlanWhatYouLoseActionSheet)
const result = require("asyncRequireImpl").fileFinishedImporting("modules/premium/native/openPremiumPlanWhatYouLoseActionSheet.tsx");

export default function openPremiumPlanWhatYouLoseActionSheet(arg0) {
  importDefault(4270).hideActionSheet();
  const obj = importDefault(4270);
  importDefault(4270).openLazy(require(1988) /* asyncRequireImpl */(7561, dependencyMap.paths), "PremiumPlanWhatYouLoseActionSheet", arg0);
};
