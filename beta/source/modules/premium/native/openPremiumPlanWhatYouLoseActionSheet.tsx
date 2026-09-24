// Module ID: 13685
// Function ID: 13686
// Name: openPremiumPlanWhatYouLoseActionSheet
// Dependencies: [4757, 13686, 1984, 2]
// Exports: default

// Module 13685 (openPremiumPlanWhatYouLoseActionSheet)
import asyncRequireImpl from "asyncRequireImpl" /* 1984 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 4757 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/premium/native/openPremiumPlanWhatYouLoseActionSheet.tsx");

export default function openPremiumPlanWhatYouLoseActionSheet(arg0) {
  ActionSheetActionCreatorsDefault.hideActionSheet();
  ActionSheetActionCreatorsDefault.openLazy(asyncRequireImpl(13686, dependencyMap.paths), "PremiumPlanWhatYouLoseActionSheet", arg0);
};
