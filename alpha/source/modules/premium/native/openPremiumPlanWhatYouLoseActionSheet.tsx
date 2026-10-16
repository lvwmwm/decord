// Module ID: 14369
// Function ID: 14370
// Name: openPremiumPlanWhatYouLoseActionSheet
// Dependencies: [5118, 14370, 2002, 2]
// Exports: default

// Module 14369 (openPremiumPlanWhatYouLoseActionSheet)
import asyncRequire from "asyncRequire" /* 2002 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5118 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/premium/native/openPremiumPlanWhatYouLoseActionSheet.tsx");

export default function openPremiumPlanWhatYouLoseActionSheet(arg0) {
  const obj = ActionSheetActionCreatorsDefault;
  obj.hideActionSheet();
  const obj2 = ActionSheetActionCreatorsDefault;
  obj2.openLazy(asyncRequire(14370, dependencyMap.paths), "PremiumPlanWhatYouLoseActionSheet", arg0);
};
