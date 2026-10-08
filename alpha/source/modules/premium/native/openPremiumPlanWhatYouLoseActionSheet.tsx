// Module ID: 13500
// Function ID: 13501
// Name: openPremiumPlanWhatYouLoseActionSheet
// Dependencies: [5054, 13501, 1999, 2]
// Exports: default

// Module 13500 (openPremiumPlanWhatYouLoseActionSheet)
import asyncRequire from "asyncRequire" /* 1999 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5054 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/premium/native/openPremiumPlanWhatYouLoseActionSheet.tsx");

export default function openPremiumPlanWhatYouLoseActionSheet(arg0) {
  const obj = ActionSheetActionCreatorsDefault;
  obj.hideActionSheet();
  const obj2 = ActionSheetActionCreatorsDefault;
  obj2.openLazy(asyncRequire(13501, dependencyMap.paths), "PremiumPlanWhatYouLoseActionSheet", arg0);
};
