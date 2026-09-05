// Module ID: 13333
// Function ID: 13334
// Name: openPremiumPlanWhatYouLoseActionSheet
// Dependencies: [4527, 13334, 1896, 2]
// Exports: default

// Module 13333 (openPremiumPlanWhatYouLoseActionSheet)
import set from "set" /* 2 */;
import asyncRequireImpl from "asyncRequireImpl" /* 1896 */;
import ACTION_SHEET_HEIGHT_HALFDefault from "ACTION_SHEET_HEIGHT_HALF" /* 4527 */;

const result = set.fileFinishedImporting("modules/premium/native/openPremiumPlanWhatYouLoseActionSheet.tsx");

export default function openPremiumPlanWhatYouLoseActionSheet(arg0) {
  ACTION_SHEET_HEIGHT_HALFDefault.hideActionSheet();
  const obj = ACTION_SHEET_HEIGHT_HALFDefault;
  ACTION_SHEET_HEIGHT_HALFDefault.openLazy(asyncRequireImpl(13334, dependencyMap.paths), "PremiumPlanWhatYouLoseActionSheet", arg0);
};
