// Module ID: 13592
// Function ID: 13593
// Name: openPremiumPlanWhatYouLoseActionSheet
// Dependencies: [5055, 13593, 2000, 2]
// Exports: default

// Module 13592 (openPremiumPlanWhatYouLoseActionSheet)
import asyncRequire from "asyncRequire" /* 2000 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5055 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/premium/native/openPremiumPlanWhatYouLoseActionSheet.tsx");

export default function openPremiumPlanWhatYouLoseActionSheet(arg0) {
  const obj = ActionSheetActionCreatorsDefault;
  obj.hideActionSheet();
  const obj2 = ActionSheetActionCreatorsDefault;
  obj2.openLazy(asyncRequire(13593, dependencyMap.paths), "PremiumPlanWhatYouLoseActionSheet", arg0);
};
