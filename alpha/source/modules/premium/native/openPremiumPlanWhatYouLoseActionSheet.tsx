// Module ID: 9346
// Function ID: 9347
// Name: openPremiumPlanWhatYouLoseActionSheet
// Dependencies: [5127, 9347, 2119, 2]
// Exports: default

// Module 9346 (openPremiumPlanWhatYouLoseActionSheet)
import asyncRequire from "asyncRequire" /* 2119 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5127 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/premium/native/openPremiumPlanWhatYouLoseActionSheet.tsx");

export default function openPremiumPlanWhatYouLoseActionSheet(arg0) {
  const obj = ActionSheetActionCreatorsDefault;
  obj.hideActionSheet();
  const obj2 = ActionSheetActionCreatorsDefault;
  obj2.openLazy(asyncRequire(9347, dependencyMap.paths), "PremiumPlanWhatYouLoseActionSheet", arg0);
};
