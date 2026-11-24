// Module ID: 9200
// Function ID: 9201
// Name: openPremiumPlanWhatYouLoseActionSheet
// Dependencies: [5131, 9201, 2119, 2]
// Exports: default

// Module 9200 (openPremiumPlanWhatYouLoseActionSheet)
import asyncRequire from "asyncRequire" /* 2119 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5131 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/premium/native/openPremiumPlanWhatYouLoseActionSheet.tsx");

export default function openPremiumPlanWhatYouLoseActionSheet(arg0) {
  const obj = ActionSheetActionCreatorsDefault;
  obj.hideActionSheet();
  const obj2 = ActionSheetActionCreatorsDefault;
  obj2.openLazy(asyncRequire(9201, dependencyMap.paths), "PremiumPlanWhatYouLoseActionSheet", arg0);
};
