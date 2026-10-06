// Module ID: 12917
// Function ID: 12918
// Name: openPremiumPlanWhatYouLoseActionSheet
// Dependencies: [4801, 12918, 1987, 2]
// Exports: default

// Module 12917 (openPremiumPlanWhatYouLoseActionSheet)
import asyncRequire from "asyncRequire" /* 1987 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 4801 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/premium/native/openPremiumPlanWhatYouLoseActionSheet.tsx");

export default function openPremiumPlanWhatYouLoseActionSheet(arg0) {
  const obj = ActionSheetActionCreatorsDefault;
  obj.hideActionSheet();
  const obj2 = ActionSheetActionCreatorsDefault;
  obj2.openLazy(asyncRequire(12918, dependencyMap.paths), "PremiumPlanWhatYouLoseActionSheet", arg0);
};
