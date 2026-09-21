// Module ID: 13649
// Function ID: 13650
// Name: openPremiumPlanWhatYouLoseActionSheet
// Dependencies: [4725, 13650, 1984, 2]
// Exports: default

// Module 13649 (openPremiumPlanWhatYouLoseActionSheet)
import asyncRequireImpl from "asyncRequireImpl" /* 1984 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 4725 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/premium/native/openPremiumPlanWhatYouLoseActionSheet.tsx");

export default function openPremiumPlanWhatYouLoseActionSheet(arg0) {
  ActionSheetActionCreatorsDefault.hideActionSheet();
  ActionSheetActionCreatorsDefault.openLazy(asyncRequireImpl(13650, dependencyMap.paths), "PremiumPlanWhatYouLoseActionSheet", arg0);
};
