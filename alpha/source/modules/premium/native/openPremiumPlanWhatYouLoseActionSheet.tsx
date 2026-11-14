// Module ID: 9957
// Function ID: 9958
// Name: openPremiumPlanWhatYouLoseActionSheet
// Dependencies: [5552, 9958, 2121, 2]
// Exports: default

// Module 9957 (openPremiumPlanWhatYouLoseActionSheet)
import asyncRequire from "asyncRequire" /* 2121 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5552 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/premium/native/openPremiumPlanWhatYouLoseActionSheet.tsx");

export default function openPremiumPlanWhatYouLoseActionSheet(arg0) {
  const obj = ActionSheetActionCreatorsDefault;
  obj.hideActionSheet();
  const obj2 = ActionSheetActionCreatorsDefault;
  obj2.openLazy(asyncRequire(9958, dependencyMap.paths), "PremiumPlanWhatYouLoseActionSheet", arg0);
};
