// Module ID: 13112
// Function ID: 13113
// Name: openPremiumPlanWhatYouLoseActionSheet
// Dependencies: [4830, 13113, 1981, 2]
// Exports: default

// Module 13112 (openPremiumPlanWhatYouLoseActionSheet)
import asyncRequireImpl from "asyncRequireImpl" /* 1981 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 4830 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/premium/native/openPremiumPlanWhatYouLoseActionSheet.tsx");

export default function openPremiumPlanWhatYouLoseActionSheet(arg0) {
  ActionSheetActionCreatorsDefault.hideActionSheet();
  ActionSheetActionCreatorsDefault.openLazy(asyncRequireImpl(13113, dependencyMap.paths), "PremiumPlanWhatYouLoseActionSheet", arg0);
};
