// Module ID: 12915
// Function ID: 12916
// Name: openPremiumPlanWhatYouLoseActionSheet
// Dependencies: [4800, 12916, 1981, 2]
// Exports: default

// Module 12915 (openPremiumPlanWhatYouLoseActionSheet)
import asyncRequireImpl from "asyncRequireImpl" /* 1981 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 4800 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/premium/native/openPremiumPlanWhatYouLoseActionSheet.tsx");

export default function openPremiumPlanWhatYouLoseActionSheet(arg0) {
  ActionSheetActionCreatorsDefault.hideActionSheet();
  ActionSheetActionCreatorsDefault.openLazy(asyncRequireImpl(12916, dependencyMap.paths), "PremiumPlanWhatYouLoseActionSheet", arg0);
};
