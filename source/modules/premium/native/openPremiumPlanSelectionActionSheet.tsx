// Module ID: 7167
// Function ID: 7168
// Name: openPremiumPlanSelectionActionSheet
// Dependencies: [1924, 4445, 7168, 2009, 2]
// Exports: default

// Module 7167 (openPremiumPlanSelectionActionSheet)
import set from "set" /* 2 */;
import GuildFeatures from "GuildFeatures" /* 1924 */;
import asyncRequireImpl from "asyncRequireImpl" /* 2009 */;
import ACTION_SHEET_HEIGHT_HALFDefault from "ACTION_SHEET_HEIGHT_HALF" /* 4445 */;

let closure_3 = GuildFeatures.PREMIUM_PLAN_SELECTION_ACTION_SHEET_KEY;
const result = set.fileFinishedImporting("modules/premium/native/openPremiumPlanSelectionActionSheet.tsx");

export default function openPremiumPlanSelectionActionSheet(arg0, arg1) {
  if (null == arg1) {
    ACTION_SHEET_HEIGHT_HALFDefault.hideActionSheet();
    const obj = ACTION_SHEET_HEIGHT_HALFDefault;
  }
  ACTION_SHEET_HEIGHT_HALFDefault.openLazy(asyncRequireImpl(7168, dependencyMap.paths), closure_3, arg0, arg1);
};
