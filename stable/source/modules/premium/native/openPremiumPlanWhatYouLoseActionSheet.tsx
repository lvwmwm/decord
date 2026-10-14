// Module ID: 13181
// Function ID: 13182
// Name: openPremiumPlanWhatYouLoseActionSheet
// Dependencies: [4854, 13182, 1987, 2]
// Exports: default

// Module 13181 (openPremiumPlanWhatYouLoseActionSheet)
import asyncRequire from "asyncRequire" /* 1987 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 4854 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/premium/native/openPremiumPlanWhatYouLoseActionSheet.tsx");

export default function openPremiumPlanWhatYouLoseActionSheet(arg0) {
  const obj = ActionSheetActionCreatorsDefault;
  obj.hideActionSheet();
  const obj2 = ActionSheetActionCreatorsDefault;
  obj2.openLazy(asyncRequire(13182, dependencyMap.paths), "PremiumPlanWhatYouLoseActionSheet", arg0);
};
