// Module ID: 14337
// Function ID: 14338
// Name: openPremiumPlanWhatYouLoseActionSheet
// Dependencies: [5115, 14338, 2000, 2]
// Exports: default

// Module 14337 (openPremiumPlanWhatYouLoseActionSheet)
import asyncRequire from "asyncRequire" /* 2000 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5115 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/premium/native/openPremiumPlanWhatYouLoseActionSheet.tsx");

export default function openPremiumPlanWhatYouLoseActionSheet(arg0) {
  const obj = ActionSheetActionCreatorsDefault;
  obj.hideActionSheet();
  const obj2 = ActionSheetActionCreatorsDefault;
  obj2.openLazy(asyncRequire(14338, dependencyMap.paths), "PremiumPlanWhatYouLoseActionSheet", arg0);
};
