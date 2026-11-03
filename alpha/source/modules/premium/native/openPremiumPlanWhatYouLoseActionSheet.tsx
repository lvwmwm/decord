// Module ID: 15404
// Function ID: 15405
// Name: openPremiumPlanWhatYouLoseActionSheet
// Dependencies: [5381, 15405, 2123, 2]
// Exports: default

// Module 15404 (openPremiumPlanWhatYouLoseActionSheet)
import asyncRequire from "asyncRequire" /* 2123 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5381 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/premium/native/openPremiumPlanWhatYouLoseActionSheet.tsx");

export default function openPremiumPlanWhatYouLoseActionSheet(arg0) {
  const obj = ActionSheetActionCreatorsDefault;
  obj.hideActionSheet();
  const obj2 = ActionSheetActionCreatorsDefault;
  obj2.openLazy(asyncRequire(15405, dependencyMap.paths), "PremiumPlanWhatYouLoseActionSheet", arg0);
};
