// Module ID: 6933
// Function ID: 6934
// Name: openPremiumPlanSelectionActionSheet
// Dependencies: [1924, 4310, 6934, 2007, 2]
// Exports: default

// Module 6933 (openPremiumPlanSelectionActionSheet)
import { PREMIUM_PLAN_SELECTION_ACTION_SHEET_KEY as closure_3 } from "GuildFeatures";

const result = require("Header").fileFinishedImporting("modules/premium/native/openPremiumPlanSelectionActionSheet.tsx");

export default function openPremiumPlanSelectionActionSheet(arg0, arg1) {
  if (null == arg1) {
    importDefault(4310).hideActionSheet();
    const obj = importDefault(4310);
  }
  importDefault(4310).openLazy(require(2007) /* asyncRequireImpl */(6934, dependencyMap.paths), closure_3, arg0, arg1);
};
