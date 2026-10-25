// Module ID: 14686
// Function ID: 14687
// Name: openPremiumPlanWhatYouLoseActionSheet
// Dependencies: [5210, 14687, 2002, 2]
// Exports: default

// Module 14686 (openPremiumPlanWhatYouLoseActionSheet)
import asyncRequire from "asyncRequire" /* 2002 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5210 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/premium/native/openPremiumPlanWhatYouLoseActionSheet.tsx");

export default function openPremiumPlanWhatYouLoseActionSheet(arg0) {
  const obj = ActionSheetActionCreatorsDefault;
  obj.hideActionSheet();
  const obj2 = ActionSheetActionCreatorsDefault;
  obj2.openLazy(asyncRequire(14687, dependencyMap.paths), "PremiumPlanWhatYouLoseActionSheet", arg0);
};
