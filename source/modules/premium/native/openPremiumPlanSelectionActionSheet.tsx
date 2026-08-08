// Module ID: 6886
// Function ID: 6887
// Name: openPremiumPlanSelectionActionSheet
// Dependencies: [1905, 4271, 6887, 1988, 2]
// Exports: default

// Module 6886 (openPremiumPlanSelectionActionSheet)
import { PREMIUM_PLAN_SELECTION_ACTION_SHEET_KEY as closure_3 } from "GuildFeatures";

const result = require("Header").fileFinishedImporting("modules/premium/native/openPremiumPlanSelectionActionSheet.tsx");

export default function openPremiumPlanSelectionActionSheet(arg0, arg1) {
  if (null == arg1) {
    importDefault(4271).hideActionSheet();
    const obj = importDefault(4271);
  }
  importDefault(4271).openLazy(require(1988) /* asyncRequireImpl */(6887, dependencyMap.paths), closure_3, arg0, arg1);
};
