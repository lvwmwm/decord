// Module ID: 14634
// Function ID: 14635
// Name: openPremiumPlanWhatYouLoseActionSheet
// Dependencies: [5196, 14635, 2002, 2]
// Exports: default

// Module 14634 (openPremiumPlanWhatYouLoseActionSheet)
import asyncRequire from "asyncRequire" /* 2002 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5196 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/premium/native/openPremiumPlanWhatYouLoseActionSheet.tsx");

export default function openPremiumPlanWhatYouLoseActionSheet(arg0) {
  const obj = ActionSheetActionCreatorsDefault;
  obj.hideActionSheet();
  const obj2 = ActionSheetActionCreatorsDefault;
  obj2.openLazy(asyncRequire(14635, dependencyMap.paths), "PremiumPlanWhatYouLoseActionSheet", arg0);
};
