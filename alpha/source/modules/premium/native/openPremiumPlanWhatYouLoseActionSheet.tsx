// Module ID: 9299
// Function ID: 9300
// Name: openPremiumPlanWhatYouLoseActionSheet
// Dependencies: [5226, 9300, 2119, 2]
// Exports: default

// Module 9299 (openPremiumPlanWhatYouLoseActionSheet)
import asyncRequire from "asyncRequire" /* 2119 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5226 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/premium/native/openPremiumPlanWhatYouLoseActionSheet.tsx");

export default function openPremiumPlanWhatYouLoseActionSheet(arg0) {
  const obj = ActionSheetActionCreatorsDefault;
  obj.hideActionSheet();
  const obj2 = ActionSheetActionCreatorsDefault;
  obj2.openLazy(asyncRequire(9300, dependencyMap.paths), "PremiumPlanWhatYouLoseActionSheet", arg0);
};
