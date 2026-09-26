// Module ID: 13675
// Function ID: 13676
// Name: openPremiumPlanWhatYouLoseActionSheet
// Dependencies: [4755, 13676, 1980, 2]
// Exports: default

// Module 13675 (openPremiumPlanWhatYouLoseActionSheet)
import asyncRequireImpl from "asyncRequireImpl" /* 1980 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 4755 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/premium/native/openPremiumPlanWhatYouLoseActionSheet.tsx");

export default function openPremiumPlanWhatYouLoseActionSheet(arg0) {
  ActionSheetActionCreatorsDefault.hideActionSheet();
  ActionSheetActionCreatorsDefault.openLazy(asyncRequireImpl(13676, dependencyMap.paths), "PremiumPlanWhatYouLoseActionSheet", arg0);
};
