// Module ID: 6213
// Function ID: 6214
// Name: openPremiumPlanSelectionActionSheet
// Dependencies: [1876, 4157, 6214, 1959, 2]
// Exports: default

// Module 6213 (openPremiumPlanSelectionActionSheet)
import { PREMIUM_PLAN_SELECTION_ACTION_SHEET_KEY as closure_3 } from "GuildFeatures";

const result = require("Header").fileFinishedImporting("modules/premium/native/openPremiumPlanSelectionActionSheet.tsx");

export default function openPremiumPlanSelectionActionSheet(arg0, arg1) {
  if (null == arg1) {
    importDefault(4157).hideActionSheet();
    const obj = importDefault(4157);
  }
  importDefault(4157).openLazy(require(1959) /* asyncRequireImpl */(6214, dependencyMap.paths), closure_3, arg0, arg1);
};
