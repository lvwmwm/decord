// Module ID: 6219
// Function ID: 6220
// Name: openPremiumPlanSelectionActionSheet
// Dependencies: [1876, 4161, 6220, 1959, 2]
// Exports: default

// Module 6219 (openPremiumPlanSelectionActionSheet)
import { PREMIUM_PLAN_SELECTION_ACTION_SHEET_KEY as closure_3 } from "GuildFeatures";

const result = require("Header").fileFinishedImporting("modules/premium/native/openPremiumPlanSelectionActionSheet.tsx");

export default function openPremiumPlanSelectionActionSheet(arg0, arg1) {
  if (null == arg1) {
    importDefault(4161).hideActionSheet();
    const obj = importDefault(4161);
  }
  importDefault(4161).openLazy(require(1959) /* asyncRequireImpl */(6220, dependencyMap.paths), closure_3, arg0, arg1);
};
