// Module ID: 14945
// Function ID: 14946
// Name: openPremiumPlanWhatYouLoseActionSheet
// Dependencies: [5246, 14946, 1999, 2]
// Exports: default

// Module 14945 (openPremiumPlanWhatYouLoseActionSheet)
import asyncRequire from "asyncRequire" /* 1999 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5246 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/premium/native/openPremiumPlanWhatYouLoseActionSheet.tsx");

export default function openPremiumPlanWhatYouLoseActionSheet(arg0) {
  const obj = ActionSheetActionCreatorsDefault;
  obj.hideActionSheet();
  const obj2 = ActionSheetActionCreatorsDefault;
  obj2.openLazy(asyncRequire(14946, dependencyMap.paths), "PremiumPlanWhatYouLoseActionSheet", arg0);
};
