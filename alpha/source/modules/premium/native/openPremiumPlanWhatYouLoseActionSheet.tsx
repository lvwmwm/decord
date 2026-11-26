// Module ID: 9341
// Function ID: 9342
// Name: openPremiumPlanWhatYouLoseActionSheet
// Dependencies: [5257, 9342, 2120, 2]
// Exports: default

// Module 9341 (openPremiumPlanWhatYouLoseActionSheet)
import asyncRequire from "asyncRequire" /* 2120 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5257 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/premium/native/openPremiumPlanWhatYouLoseActionSheet.tsx");

export default function openPremiumPlanWhatYouLoseActionSheet(arg0) {
  const obj = ActionSheetActionCreatorsDefault;
  obj.hideActionSheet();
  const obj2 = ActionSheetActionCreatorsDefault;
  obj2.openLazy(asyncRequire(9342, dependencyMap.paths), "PremiumPlanWhatYouLoseActionSheet", arg0);
};
