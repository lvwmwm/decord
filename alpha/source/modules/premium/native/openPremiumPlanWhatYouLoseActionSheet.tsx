// Module ID: 15491
// Function ID: 15492
// Name: openPremiumPlanWhatYouLoseActionSheet
// Dependencies: [5382, 15492, 2123, 2]
// Exports: default

// Module 15491 (openPremiumPlanWhatYouLoseActionSheet)
import asyncRequire from "asyncRequire" /* 2123 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5382 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/premium/native/openPremiumPlanWhatYouLoseActionSheet.tsx");

export default function openPremiumPlanWhatYouLoseActionSheet(arg0) {
  const obj = ActionSheetActionCreatorsDefault;
  obj.hideActionSheet();
  const obj2 = ActionSheetActionCreatorsDefault;
  obj2.openLazy(asyncRequire(15492, dependencyMap.paths), "PremiumPlanWhatYouLoseActionSheet", arg0);
};
