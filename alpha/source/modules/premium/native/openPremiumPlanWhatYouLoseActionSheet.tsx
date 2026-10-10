// Module ID: 13643
// Function ID: 13644
// Name: openPremiumPlanWhatYouLoseActionSheet
// Dependencies: [5056, 13644, 2000, 2]
// Exports: default

// Module 13643 (openPremiumPlanWhatYouLoseActionSheet)
import asyncRequire from "asyncRequire" /* 2000 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5056 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/premium/native/openPremiumPlanWhatYouLoseActionSheet.tsx");

export default function openPremiumPlanWhatYouLoseActionSheet(arg0) {
  const obj = ActionSheetActionCreatorsDefault;
  obj.hideActionSheet();
  const obj2 = ActionSheetActionCreatorsDefault;
  obj2.openLazy(asyncRequire(13644, dependencyMap.paths), "PremiumPlanWhatYouLoseActionSheet", arg0);
};
