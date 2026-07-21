// Module ID: 7395
// Function ID: 59486
// Name: openPremiumPlanWhatYouLoseActionSheet
// Dependencies: []
// Exports: default

// Module 7395 (openPremiumPlanWhatYouLoseActionSheet)
const _module = require(dependencyMap[3]);
const result = _module.fileFinishedImporting("modules/premium/native/openPremiumPlanWhatYouLoseActionSheet.tsx");

export default function openPremiumPlanWhatYouLoseActionSheet(arg0) {
  importDefault(dependencyMap[0]).hideActionSheet();
  const obj = importDefault(dependencyMap[0]);
  importDefault(dependencyMap[0]).openLazy(require(dependencyMap[2])(dependencyMap[1], dependencyMap.paths), "PremiumPlanWhatYouLoseActionSheet", arg0);
};
