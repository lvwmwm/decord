// Module ID: 13671
// Function ID: 13672
// Name: openPremiumPlanWhatYouLoseActionSheet
// Dependencies: [5056, 13672, 2000, 2]
// Exports: default

// Module 13671 (openPremiumPlanWhatYouLoseActionSheet)
import asyncRequire from "asyncRequire" /* 2000 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5056 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/premium/native/openPremiumPlanWhatYouLoseActionSheet.tsx");

export default function openPremiumPlanWhatYouLoseActionSheet(arg0) {
  const obj = ActionSheetActionCreatorsDefault;
  obj.hideActionSheet();
  const obj2 = ActionSheetActionCreatorsDefault;
  obj2.openLazy(asyncRequire(13672, dependencyMap.paths), "PremiumPlanWhatYouLoseActionSheet", arg0);
};
