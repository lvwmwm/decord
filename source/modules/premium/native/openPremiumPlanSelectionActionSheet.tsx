// Module ID: 6795
// Function ID: 6796
// Name: openPremiumPlanSelectionActionSheet
// Dependencies: [1876, 4253, 6796, 1959, 2]
// Exports: default

// Module 6795 (openPremiumPlanSelectionActionSheet)
import { PREMIUM_PLAN_SELECTION_ACTION_SHEET_KEY as closure_3 } from "GuildFeatures";

const result = require("Header").fileFinishedImporting("modules/premium/native/openPremiumPlanSelectionActionSheet.tsx");

export default function openPremiumPlanSelectionActionSheet(arg0, arg1) {
  if (null == arg1) {
    importDefault(4253).hideActionSheet();
    const obj = importDefault(4253);
  }
  importDefault(4253).openLazy(require(1959) /* asyncRequireImpl */(6796, dependencyMap.paths), closure_3, arg0, arg1);
};
