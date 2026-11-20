// Module ID: 9226
// Function ID: 9227
// Name: openPremiumPlanWhatYouLoseActionSheet
// Dependencies: [5008, 9227, 2119, 2]
// Exports: default

// Module 9226 (openPremiumPlanWhatYouLoseActionSheet)
import asyncRequire from "asyncRequire" /* 2119 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5008 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/premium/native/openPremiumPlanWhatYouLoseActionSheet.tsx");

export default function openPremiumPlanWhatYouLoseActionSheet(arg0) {
  const obj = ActionSheetActionCreatorsDefault;
  obj.hideActionSheet();
  const obj2 = ActionSheetActionCreatorsDefault;
  obj2.openLazy(asyncRequire(9227, dependencyMap.paths), "PremiumPlanWhatYouLoseActionSheet", arg0);
};
