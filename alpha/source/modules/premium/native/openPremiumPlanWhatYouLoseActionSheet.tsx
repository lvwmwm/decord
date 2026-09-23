// Module ID: 13736
// Function ID: 13737
// Name: openPremiumPlanWhatYouLoseActionSheet
// Dependencies: [4794, 13737, 1980, 2]
// Exports: default

// Module 13736 (openPremiumPlanWhatYouLoseActionSheet)
import asyncRequireImpl from "asyncRequireImpl" /* 1980 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 4794 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/premium/native/openPremiumPlanWhatYouLoseActionSheet.tsx");

export default function openPremiumPlanWhatYouLoseActionSheet(arg0) {
  ActionSheetActionCreatorsDefault.hideActionSheet();
  ActionSheetActionCreatorsDefault.openLazy(asyncRequireImpl(13737, dependencyMap.paths), "PremiumPlanWhatYouLoseActionSheet", arg0);
};
