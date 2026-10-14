// Module ID: 14040
// Function ID: 14041
// Name: openPremiumPlanWhatYouLoseActionSheet
// Dependencies: [5060, 14041, 2000, 2]
// Exports: default

// Module 14040 (openPremiumPlanWhatYouLoseActionSheet)
import asyncRequire from "asyncRequire" /* 2000 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5060 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/premium/native/openPremiumPlanWhatYouLoseActionSheet.tsx");

export default function openPremiumPlanWhatYouLoseActionSheet(arg0) {
  const obj = ActionSheetActionCreatorsDefault;
  obj.hideActionSheet();
  const obj2 = ActionSheetActionCreatorsDefault;
  obj2.openLazy(asyncRequire(14041, dependencyMap.paths), "PremiumPlanWhatYouLoseActionSheet", arg0);
};
