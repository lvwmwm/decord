// Module ID: 15576
// Function ID: 15577
// Name: openPremiumPlanWhatYouLoseActionSheet
// Dependencies: [5406, 15577, 2118, 2]
// Exports: default

// Module 15576 (openPremiumPlanWhatYouLoseActionSheet)
import asyncRequire from "asyncRequire" /* 2118 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5406 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/premium/native/openPremiumPlanWhatYouLoseActionSheet.tsx");

export default function openPremiumPlanWhatYouLoseActionSheet(arg0) {
  const obj = ActionSheetActionCreatorsDefault;
  obj.hideActionSheet();
  const obj2 = ActionSheetActionCreatorsDefault;
  obj2.openLazy(asyncRequire(15577, dependencyMap.paths), "PremiumPlanWhatYouLoseActionSheet", arg0);
};
