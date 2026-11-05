// Module ID: 15505
// Function ID: 15506
// Name: openPremiumPlanWhatYouLoseActionSheet
// Dependencies: [5384, 15506, 2123, 2]
// Exports: default

// Module 15505 (openPremiumPlanWhatYouLoseActionSheet)
import asyncRequire from "asyncRequire" /* 2123 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5384 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/premium/native/openPremiumPlanWhatYouLoseActionSheet.tsx");

export default function openPremiumPlanWhatYouLoseActionSheet(arg0) {
  const obj = ActionSheetActionCreatorsDefault;
  obj.hideActionSheet();
  const obj2 = ActionSheetActionCreatorsDefault;
  obj2.openLazy(asyncRequire(15506, dependencyMap.paths), "PremiumPlanWhatYouLoseActionSheet", arg0);
};
