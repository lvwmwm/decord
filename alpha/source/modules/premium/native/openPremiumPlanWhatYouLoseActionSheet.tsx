// Module ID: 15259
// Function ID: 15260
// Name: openPremiumPlanWhatYouLoseActionSheet
// Dependencies: [5258, 15260, 1994, 2]
// Exports: default

// Module 15259 (openPremiumPlanWhatYouLoseActionSheet)
import asyncRequire from "asyncRequire" /* 1994 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5258 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/premium/native/openPremiumPlanWhatYouLoseActionSheet.tsx");

export default function openPremiumPlanWhatYouLoseActionSheet(arg0) {
  const obj = ActionSheetActionCreatorsDefault;
  obj.hideActionSheet();
  const obj2 = ActionSheetActionCreatorsDefault;
  obj2.openLazy(asyncRequire(15260, dependencyMap.paths), "PremiumPlanWhatYouLoseActionSheet", arg0);
};
