// Module ID: 13654
// Function ID: 13655
// Name: openPremiumPlanWhatYouLoseActionSheet
// Dependencies: [4724, 13655, 1980, 2]
// Exports: default

// Module 13654 (openPremiumPlanWhatYouLoseActionSheet)
import asyncRequireImpl from "asyncRequireImpl" /* 1980 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 4724 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/premium/native/openPremiumPlanWhatYouLoseActionSheet.tsx");

export default function openPremiumPlanWhatYouLoseActionSheet(arg0) {
  ActionSheetActionCreatorsDefault.hideActionSheet();
  ActionSheetActionCreatorsDefault.openLazy(asyncRequireImpl(13655, dependencyMap.paths), "PremiumPlanWhatYouLoseActionSheet", arg0);
};
