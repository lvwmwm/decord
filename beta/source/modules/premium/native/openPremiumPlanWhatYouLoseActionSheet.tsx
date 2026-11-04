// Module ID: 15263
// Function ID: 15264
// Name: openPremiumPlanWhatYouLoseActionSheet
// Dependencies: [5258, 15264, 1994, 2]
// Exports: default

// Module 15263 (openPremiumPlanWhatYouLoseActionSheet)
import asyncRequire from "asyncRequire" /* 1994 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5258 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/premium/native/openPremiumPlanWhatYouLoseActionSheet.tsx");

export default function openPremiumPlanWhatYouLoseActionSheet(arg0) {
  const obj = ActionSheetActionCreatorsDefault;
  obj.hideActionSheet();
  const obj2 = ActionSheetActionCreatorsDefault;
  obj2.openLazy(asyncRequire(15264, dependencyMap.paths), "PremiumPlanWhatYouLoseActionSheet", arg0);
};
