// Module ID: 15574
// Function ID: 15575
// Name: openPremiumPlanWhatYouLoseActionSheet
// Dependencies: [5406, 15575, 2118, 2]
// Exports: default

// Module 15574 (openPremiumPlanWhatYouLoseActionSheet)
import asyncRequire from "asyncRequire" /* 2118 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5406 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/premium/native/openPremiumPlanWhatYouLoseActionSheet.tsx");

export default function openPremiumPlanWhatYouLoseActionSheet(arg0) {
  const obj = ActionSheetActionCreatorsDefault;
  obj.hideActionSheet();
  const obj2 = ActionSheetActionCreatorsDefault;
  obj2.openLazy(asyncRequire(15575, dependencyMap.paths), "PremiumPlanWhatYouLoseActionSheet", arg0);
};
