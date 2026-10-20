// Module ID: 14484
// Function ID: 14485
// Name: openPremiumPlanWhatYouLoseActionSheet
// Dependencies: [5171, 14485, 2002, 2]
// Exports: default

// Module 14484 (openPremiumPlanWhatYouLoseActionSheet)
import asyncRequire from "asyncRequire" /* 2002 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5171 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/premium/native/openPremiumPlanWhatYouLoseActionSheet.tsx");

export default function openPremiumPlanWhatYouLoseActionSheet(arg0) {
  const obj = ActionSheetActionCreatorsDefault;
  obj.hideActionSheet();
  const obj2 = ActionSheetActionCreatorsDefault;
  obj2.openLazy(asyncRequire(14485, dependencyMap.paths), "PremiumPlanWhatYouLoseActionSheet", arg0);
};
