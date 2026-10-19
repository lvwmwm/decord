// Module ID: 14451
// Function ID: 14452
// Name: openPremiumPlanWhatYouLoseActionSheet
// Dependencies: [5155, 14452, 2002, 2]
// Exports: default

// Module 14451 (openPremiumPlanWhatYouLoseActionSheet)
import asyncRequire from "asyncRequire" /* 2002 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5155 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/premium/native/openPremiumPlanWhatYouLoseActionSheet.tsx");

export default function openPremiumPlanWhatYouLoseActionSheet(arg0) {
  const obj = ActionSheetActionCreatorsDefault;
  obj.hideActionSheet();
  const obj2 = ActionSheetActionCreatorsDefault;
  obj2.openLazy(asyncRequire(14452, dependencyMap.paths), "PremiumPlanWhatYouLoseActionSheet", arg0);
};
