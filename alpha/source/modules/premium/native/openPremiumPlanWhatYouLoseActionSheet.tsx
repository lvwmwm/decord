// Module ID: 14576
// Function ID: 14577
// Name: openPremiumPlanWhatYouLoseActionSheet
// Dependencies: [5192, 14577, 2002, 2]
// Exports: default

// Module 14576 (openPremiumPlanWhatYouLoseActionSheet)
import asyncRequire from "asyncRequire" /* 2002 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5192 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/premium/native/openPremiumPlanWhatYouLoseActionSheet.tsx");

export default function openPremiumPlanWhatYouLoseActionSheet(arg0) {
  const obj = ActionSheetActionCreatorsDefault;
  obj.hideActionSheet();
  const obj2 = ActionSheetActionCreatorsDefault;
  obj2.openLazy(asyncRequire(14577, dependencyMap.paths), "PremiumPlanWhatYouLoseActionSheet", arg0);
};
