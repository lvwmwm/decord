// Module ID: 9250
// Function ID: 9251
// Name: openPremiumPlanWhatYouLoseActionSheet
// Dependencies: [5037, 9251, 2121, 2]
// Exports: default

// Module 9250 (openPremiumPlanWhatYouLoseActionSheet)
import asyncRequire from "asyncRequire" /* 2121 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5037 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/premium/native/openPremiumPlanWhatYouLoseActionSheet.tsx");

export default function openPremiumPlanWhatYouLoseActionSheet(arg0) {
  const obj = ActionSheetActionCreatorsDefault;
  obj.hideActionSheet();
  const obj2 = ActionSheetActionCreatorsDefault;
  obj2.openLazy(asyncRequire(9251, dependencyMap.paths), "PremiumPlanWhatYouLoseActionSheet", arg0);
};
