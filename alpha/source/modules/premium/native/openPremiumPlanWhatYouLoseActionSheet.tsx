// Module ID: 15220
// Function ID: 15221
// Name: openPremiumPlanWhatYouLoseActionSheet
// Dependencies: [5253, 15221, 1995, 2]
// Exports: default

// Module 15220 (openPremiumPlanWhatYouLoseActionSheet)
import asyncRequire from "asyncRequire" /* 1995 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5253 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/premium/native/openPremiumPlanWhatYouLoseActionSheet.tsx");

export default function openPremiumPlanWhatYouLoseActionSheet(arg0) {
  const obj = ActionSheetActionCreatorsDefault;
  obj.hideActionSheet();
  const obj2 = ActionSheetActionCreatorsDefault;
  obj2.openLazy(asyncRequire(15221, dependencyMap.paths), "PremiumPlanWhatYouLoseActionSheet", arg0);
};
