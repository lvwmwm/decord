// Module ID: 15569
// Function ID: 15570
// Name: openPremiumPlanWhatYouLoseActionSheet
// Dependencies: [5376, 15570, 2118, 2]
// Exports: default

// Module 15569 (openPremiumPlanWhatYouLoseActionSheet)
import asyncRequire from "asyncRequire" /* 2118 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5376 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/premium/native/openPremiumPlanWhatYouLoseActionSheet.tsx");

export default function openPremiumPlanWhatYouLoseActionSheet(arg0) {
  const obj = ActionSheetActionCreatorsDefault;
  obj.hideActionSheet();
  const obj2 = ActionSheetActionCreatorsDefault;
  obj2.openLazy(asyncRequire(15570, dependencyMap.paths), "PremiumPlanWhatYouLoseActionSheet", arg0);
};
