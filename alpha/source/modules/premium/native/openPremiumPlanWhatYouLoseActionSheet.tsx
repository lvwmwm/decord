// Module ID: 14003
// Function ID: 14004
// Name: openPremiumPlanWhatYouLoseActionSheet
// Dependencies: [5056, 14004, 2000, 2]
// Exports: default

// Module 14003 (openPremiumPlanWhatYouLoseActionSheet)
import asyncRequire from "asyncRequire" /* 2000 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5056 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/premium/native/openPremiumPlanWhatYouLoseActionSheet.tsx");

export default function openPremiumPlanWhatYouLoseActionSheet(arg0) {
  const obj = ActionSheetActionCreatorsDefault;
  obj.hideActionSheet();
  const obj2 = ActionSheetActionCreatorsDefault;
  obj2.openLazy(asyncRequire(14004, dependencyMap.paths), "PremiumPlanWhatYouLoseActionSheet", arg0);
};
