// Module ID: 14502
// Function ID: 14503
// Name: openPremiumPlanWhatYouLoseActionSheet
// Dependencies: [5171, 14503, 2002, 2]
// Exports: default

// Module 14502 (openPremiumPlanWhatYouLoseActionSheet)
import asyncRequire from "asyncRequire" /* 2002 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5171 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/premium/native/openPremiumPlanWhatYouLoseActionSheet.tsx");

export default function openPremiumPlanWhatYouLoseActionSheet(arg0) {
  const obj = ActionSheetActionCreatorsDefault;
  obj.hideActionSheet();
  const obj2 = ActionSheetActionCreatorsDefault;
  obj2.openLazy(asyncRequire(14503, dependencyMap.paths), "PremiumPlanWhatYouLoseActionSheet", arg0);
};
