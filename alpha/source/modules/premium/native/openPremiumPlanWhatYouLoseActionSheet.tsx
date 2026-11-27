// Module ID: 9342
// Function ID: 9343
// Name: openPremiumPlanWhatYouLoseActionSheet
// Dependencies: [5257, 9343, 2120, 2]
// Exports: default

// Module 9342 (openPremiumPlanWhatYouLoseActionSheet)
import asyncRequire from "asyncRequire" /* 2120 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5257 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/premium/native/openPremiumPlanWhatYouLoseActionSheet.tsx");

export default function openPremiumPlanWhatYouLoseActionSheet(arg0) {
  const obj = ActionSheetActionCreatorsDefault;
  obj.hideActionSheet();
  const obj2 = ActionSheetActionCreatorsDefault;
  obj2.openLazy(asyncRequire(9343, dependencyMap.paths), "PremiumPlanWhatYouLoseActionSheet", arg0);
};
