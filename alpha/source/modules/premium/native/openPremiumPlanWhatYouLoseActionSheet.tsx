// Module ID: 9891
// Function ID: 9892
// Name: openPremiumPlanWhatYouLoseActionSheet
// Dependencies: [5489, 9892, 2118, 2]
// Exports: default

// Module 9891 (openPremiumPlanWhatYouLoseActionSheet)
import asyncRequire from "asyncRequire" /* 2118 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5489 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/premium/native/openPremiumPlanWhatYouLoseActionSheet.tsx");

export default function openPremiumPlanWhatYouLoseActionSheet(arg0) {
  const obj = ActionSheetActionCreatorsDefault;
  obj.hideActionSheet();
  const obj2 = ActionSheetActionCreatorsDefault;
  obj2.openLazy(asyncRequire(9892, dependencyMap.paths), "PremiumPlanWhatYouLoseActionSheet", arg0);
};
