// Module ID: 12994
// Function ID: 12995
// Name: openPremiumPlanWhatYouLoseActionSheet
// Dependencies: [4445, 12995, 2009, 2]
// Exports: default

// Module 12994 (openPremiumPlanWhatYouLoseActionSheet)
import set from "set" /* 2 */;
import asyncRequireImpl from "asyncRequireImpl" /* 2009 */;
import ACTION_SHEET_HEIGHT_HALFDefault from "ACTION_SHEET_HEIGHT_HALF" /* 4445 */;

const result = set.fileFinishedImporting("modules/premium/native/openPremiumPlanWhatYouLoseActionSheet.tsx");

export default function openPremiumPlanWhatYouLoseActionSheet(arg0) {
  ACTION_SHEET_HEIGHT_HALFDefault.hideActionSheet();
  const obj = ACTION_SHEET_HEIGHT_HALFDefault;
  ACTION_SHEET_HEIGHT_HALFDefault.openLazy(asyncRequireImpl(12995, dependencyMap.paths), "PremiumPlanWhatYouLoseActionSheet", arg0);
};
