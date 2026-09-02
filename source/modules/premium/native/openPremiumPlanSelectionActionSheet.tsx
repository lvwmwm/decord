// Module ID: 7176
// Function ID: 7177
// Name: openPremiumPlanSelectionActionSheet
// Dependencies: [1923, 4445, 7177, 2008, 2]
// Exports: default

// Module 7176 (openPremiumPlanSelectionActionSheet)
import set from "set" /* 2 */;
import GuildFeatures from "GuildFeatures" /* 1923 */;
import asyncRequireImpl from "asyncRequireImpl" /* 2008 */;
import ACTION_SHEET_HEIGHT_HALFDefault from "ACTION_SHEET_HEIGHT_HALF" /* 4445 */;

let closure_3 = GuildFeatures.PREMIUM_PLAN_SELECTION_ACTION_SHEET_KEY;
const result = set.fileFinishedImporting("modules/premium/native/openPremiumPlanSelectionActionSheet.tsx");

export default function openPremiumPlanSelectionActionSheet(arg0, arg1) {
  if (null == arg1) {
    ACTION_SHEET_HEIGHT_HALFDefault.hideActionSheet();
    const obj = ACTION_SHEET_HEIGHT_HALFDefault;
  }
  ACTION_SHEET_HEIGHT_HALFDefault.openLazy(asyncRequireImpl(7177, dependencyMap.paths), closure_3, arg0, arg1);
};
