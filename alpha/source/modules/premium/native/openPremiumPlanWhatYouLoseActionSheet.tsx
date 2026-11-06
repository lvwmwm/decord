// Module ID: 15499
// Function ID: 15500
// Name: openPremiumPlanWhatYouLoseActionSheet
// Dependencies: [5404, 15500, 2118, 2]
// Exports: default

// Module 15499 (openPremiumPlanWhatYouLoseActionSheet)
import asyncRequire from "asyncRequire" /* 2118 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5404 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/premium/native/openPremiumPlanWhatYouLoseActionSheet.tsx");

export default function openPremiumPlanWhatYouLoseActionSheet(arg0) {
  const obj = ActionSheetActionCreatorsDefault;
  obj.hideActionSheet();
  const obj2 = ActionSheetActionCreatorsDefault;
  obj2.openLazy(asyncRequire(15500, dependencyMap.paths), "PremiumPlanWhatYouLoseActionSheet", arg0);
};
