// Module ID: 15492
// Function ID: 15493
// Name: openPremiumPlanWhatYouLoseActionSheet
// Dependencies: [5382, 15493, 2123, 2]
// Exports: default

// Module 15492 (openPremiumPlanWhatYouLoseActionSheet)
import asyncRequire from "asyncRequire" /* 2123 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5382 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/premium/native/openPremiumPlanWhatYouLoseActionSheet.tsx");

export default function openPremiumPlanWhatYouLoseActionSheet(arg0) {
  const obj = ActionSheetActionCreatorsDefault;
  obj.hideActionSheet();
  const obj2 = ActionSheetActionCreatorsDefault;
  obj2.openLazy(asyncRequire(15493, dependencyMap.paths), "PremiumPlanWhatYouLoseActionSheet", arg0);
};
