// Module ID: 9890
// Function ID: 9891
// Name: openPremiumPlanWhatYouLoseActionSheet
// Dependencies: [5489, 9891, 2118, 2]
// Exports: default

// Module 9890 (openPremiumPlanWhatYouLoseActionSheet)
import asyncRequire from "asyncRequire" /* 2118 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5489 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/premium/native/openPremiumPlanWhatYouLoseActionSheet.tsx");

export default function openPremiumPlanWhatYouLoseActionSheet(arg0) {
  const obj = ActionSheetActionCreatorsDefault;
  obj.hideActionSheet();
  const obj2 = ActionSheetActionCreatorsDefault;
  obj2.openLazy(asyncRequire(9891, dependencyMap.paths), "PremiumPlanWhatYouLoseActionSheet", arg0);
};
