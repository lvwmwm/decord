// Module ID: 7393
// Function ID: 7394
// Name: openPremiumPlanSelectionActionSheet
// Dependencies: [1924, 4342, 7394, 2007, 2]
// Exports: default

// Module 7393 (openPremiumPlanSelectionActionSheet)
import { PREMIUM_PLAN_SELECTION_ACTION_SHEET_KEY as closure_3 } from "GuildFeatures";

const result = require("Header").fileFinishedImporting("modules/premium/native/openPremiumPlanSelectionActionSheet.tsx");

export default function openPremiumPlanSelectionActionSheet(arg0, arg1) {
  if (null == arg1) {
    importDefault(4342).hideActionSheet();
    const obj = importDefault(4342);
  }
  importDefault(4342).openLazy(require(2007) /* asyncRequireImpl */(7394, dependencyMap.paths), closure_3, arg0, arg1);
};
