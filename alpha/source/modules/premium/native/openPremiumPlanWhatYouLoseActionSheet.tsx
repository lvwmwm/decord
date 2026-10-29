// Module ID: 15180
// Function ID: 15181
// Name: openPremiumPlanWhatYouLoseActionSheet
// Dependencies: [5247, 15181, 2000, 2]
// Exports: default

// Module 15180 (openPremiumPlanWhatYouLoseActionSheet)
import asyncRequire from "asyncRequire" /* 2000 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5247 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/premium/native/openPremiumPlanWhatYouLoseActionSheet.tsx");

export default function openPremiumPlanWhatYouLoseActionSheet(arg0) {
  const obj = ActionSheetActionCreatorsDefault;
  obj.hideActionSheet();
  const obj2 = ActionSheetActionCreatorsDefault;
  obj2.openLazy(asyncRequire(15181, dependencyMap.paths), "PremiumPlanWhatYouLoseActionSheet", arg0);
};
