// Module ID: 14379
// Function ID: 14380
// Name: openPremiumPlanWhatYouLoseActionSheet
// Dependencies: [5118, 14380, 2002, 2]
// Exports: default

// Module 14379 (openPremiumPlanWhatYouLoseActionSheet)
import asyncRequire from "asyncRequire" /* 2002 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5118 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/premium/native/openPremiumPlanWhatYouLoseActionSheet.tsx");

export default function openPremiumPlanWhatYouLoseActionSheet(arg0) {
  const obj = ActionSheetActionCreatorsDefault;
  obj.hideActionSheet();
  const obj2 = ActionSheetActionCreatorsDefault;
  obj2.openLazy(asyncRequire(14380, dependencyMap.paths), "PremiumPlanWhatYouLoseActionSheet", arg0);
};
