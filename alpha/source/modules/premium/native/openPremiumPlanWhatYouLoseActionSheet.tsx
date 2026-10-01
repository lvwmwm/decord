// Module ID: 13120
// Function ID: 13121
// Name: openPremiumPlanWhatYouLoseActionSheet
// Dependencies: [4809, 13121, 1981, 2]
// Exports: default

// Module 13120 (openPremiumPlanWhatYouLoseActionSheet)
import asyncRequireImpl from "asyncRequireImpl" /* 1981 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 4809 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/premium/native/openPremiumPlanWhatYouLoseActionSheet.tsx");

export default function openPremiumPlanWhatYouLoseActionSheet(arg0) {
  ActionSheetActionCreatorsDefault.hideActionSheet();
  ActionSheetActionCreatorsDefault.openLazy(asyncRequireImpl(13121, dependencyMap.paths), "PremiumPlanWhatYouLoseActionSheet", arg0);
};
