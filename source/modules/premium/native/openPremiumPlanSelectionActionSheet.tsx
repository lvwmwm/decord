// Module ID: 6780
// Function ID: 6781
// Name: openPremiumPlanSelectionActionSheet
// Dependencies: [1876, 4223, 6781, 1959, 2]
// Exports: default

// Module 6780 (openPremiumPlanSelectionActionSheet)
import { PREMIUM_PLAN_SELECTION_ACTION_SHEET_KEY as closure_3 } from "GuildFeatures";

const result = require("Header").fileFinishedImporting("modules/premium/native/openPremiumPlanSelectionActionSheet.tsx");

export default function openPremiumPlanSelectionActionSheet(arg0, arg1) {
  if (null == arg1) {
    importDefault(4223).hideActionSheet();
    const obj = importDefault(4223);
  }
  importDefault(4223).openLazy(require(1959) /* asyncRequireImpl */(6781, dependencyMap.paths), closure_3, arg0, arg1);
};
