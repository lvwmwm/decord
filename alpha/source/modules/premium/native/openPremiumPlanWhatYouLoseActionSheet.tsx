// Module ID: 9970
// Function ID: 9971
// Name: openPremiumPlanWhatYouLoseActionSheet
// Dependencies: [5546, 9971, 2121, 2]
// Exports: default

// Module 9970 (openPremiumPlanWhatYouLoseActionSheet)
import asyncRequire from "asyncRequire" /* 2121 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5546 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/premium/native/openPremiumPlanWhatYouLoseActionSheet.tsx");

export default function openPremiumPlanWhatYouLoseActionSheet(arg0) {
  const obj = ActionSheetActionCreatorsDefault;
  obj.hideActionSheet();
  const obj2 = ActionSheetActionCreatorsDefault;
  obj2.openLazy(asyncRequire(9971, dependencyMap.paths), "PremiumPlanWhatYouLoseActionSheet", arg0);
};
