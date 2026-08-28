// Module ID: 12927
// Function ID: 12928
// Name: openPremiumPlanWhatYouLoseActionSheet
// Dependencies: [4413, 12928, 2010, 2]
// Exports: default

// Module 12927 (openPremiumPlanWhatYouLoseActionSheet)
import set from "set" /* 2 */;
import asyncRequireImpl from "asyncRequireImpl" /* 2010 */;
import ACTION_SHEET_HEIGHT_HALFDefault from "ACTION_SHEET_HEIGHT_HALF" /* 4413 */;

const result = set.fileFinishedImporting("modules/premium/native/openPremiumPlanWhatYouLoseActionSheet.tsx");

export default function openPremiumPlanWhatYouLoseActionSheet(arg0) {
  ACTION_SHEET_HEIGHT_HALFDefault.hideActionSheet();
  const obj = ACTION_SHEET_HEIGHT_HALFDefault;
  ACTION_SHEET_HEIGHT_HALFDefault.openLazy(asyncRequireImpl(12928, dependencyMap.paths), "PremiumPlanWhatYouLoseActionSheet", arg0);
};
