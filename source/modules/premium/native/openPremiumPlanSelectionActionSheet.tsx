// Module ID: 6888
// Function ID: 6889
// Name: openPremiumPlanSelectionActionSheet
// Dependencies: [1924, 4271, 6889, 2007, 2]
// Exports: default

// Module 6888 (openPremiumPlanSelectionActionSheet)
import { PREMIUM_PLAN_SELECTION_ACTION_SHEET_KEY as closure_3 } from "GuildFeatures";

const result = require("Header").fileFinishedImporting("modules/premium/native/openPremiumPlanSelectionActionSheet.tsx");

export default function openPremiumPlanSelectionActionSheet(arg0, arg1) {
  if (null == arg1) {
    importDefault(4271).hideActionSheet();
    const obj = importDefault(4271);
  }
  importDefault(4271).openLazy(require(2007) /* asyncRequireImpl */(6889, dependencyMap.paths), closure_3, arg0, arg1);
};
