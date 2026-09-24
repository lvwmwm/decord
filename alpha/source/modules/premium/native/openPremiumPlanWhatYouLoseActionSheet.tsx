// Module ID: 13745
// Function ID: 13746
// Name: openPremiumPlanWhatYouLoseActionSheet
// Dependencies: [4796, 13746, 1980, 2]
// Exports: default

// Module 13745 (openPremiumPlanWhatYouLoseActionSheet)
import asyncRequireImpl from "asyncRequireImpl" /* 1980 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 4796 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/premium/native/openPremiumPlanWhatYouLoseActionSheet.tsx");

export default function openPremiumPlanWhatYouLoseActionSheet(arg0) {
  ActionSheetActionCreatorsDefault.hideActionSheet();
  ActionSheetActionCreatorsDefault.openLazy(asyncRequireImpl(13746, dependencyMap.paths), "PremiumPlanWhatYouLoseActionSheet", arg0);
};
