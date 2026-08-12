// Module ID: 6927
// Function ID: 6928
// Name: openPremiumPlanSelectionActionSheet
// Dependencies: [1924, 4312, 6928, 2007, 2]
// Exports: default

// Module 6927 (openPremiumPlanSelectionActionSheet)
import { PREMIUM_PLAN_SELECTION_ACTION_SHEET_KEY as closure_3 } from "GuildFeatures";

const result = require("Header").fileFinishedImporting("modules/premium/native/openPremiumPlanSelectionActionSheet.tsx");

export default function openPremiumPlanSelectionActionSheet(arg0, arg1) {
  if (null == arg1) {
    importDefault(4312).hideActionSheet();
    const obj = importDefault(4312);
  }
  importDefault(4312).openLazy(require(2007) /* asyncRequireImpl */(6928, dependencyMap.paths), closure_3, arg0, arg1);
};
