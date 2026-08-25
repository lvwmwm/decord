// Module ID: 7764
// Function ID: 7765
// Name: openPremiumPlanWhatYouLoseActionSheet
// Dependencies: [4347, 7765, 2009, 2]
// Exports: default

// Module 7764 (openPremiumPlanWhatYouLoseActionSheet)
import set from "set" /* 2 */;
import asyncRequireImpl from "asyncRequireImpl" /* 2009 */;
import ACTION_SHEET_HEIGHT_HALFDefault from "ACTION_SHEET_HEIGHT_HALF" /* 4347 */;

const result = set.fileFinishedImporting("modules/premium/native/openPremiumPlanWhatYouLoseActionSheet.tsx");

export default function openPremiumPlanWhatYouLoseActionSheet(arg0) {
  ACTION_SHEET_HEIGHT_HALFDefault.hideActionSheet();
  const obj = ACTION_SHEET_HEIGHT_HALFDefault;
  ACTION_SHEET_HEIGHT_HALFDefault.openLazy(asyncRequireImpl(7765, dependencyMap.paths), "PremiumPlanWhatYouLoseActionSheet", arg0);
};
