// Module ID: 14718
// Function ID: 14719
// Name: openPremiumPlanWhatYouLoseActionSheet
// Dependencies: [5242, 14719, 2002, 2]
// Exports: default

// Module 14718 (openPremiumPlanWhatYouLoseActionSheet)
import asyncRequire from "asyncRequire" /* 2002 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5242 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/premium/native/openPremiumPlanWhatYouLoseActionSheet.tsx");

export default function openPremiumPlanWhatYouLoseActionSheet(arg0) {
  const obj = ActionSheetActionCreatorsDefault;
  obj.hideActionSheet();
  const obj2 = ActionSheetActionCreatorsDefault;
  obj2.openLazy(asyncRequire(14719, dependencyMap.paths), "PremiumPlanWhatYouLoseActionSheet", arg0);
};
