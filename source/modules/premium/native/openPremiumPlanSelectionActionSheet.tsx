// Module ID: 6807
// Function ID: 6808
// Name: openPremiumPlanSelectionActionSheet
// Dependencies: [1905, 4253, 6808, 1988, 2]
// Exports: default

// Module 6807 (openPremiumPlanSelectionActionSheet)
import { PREMIUM_PLAN_SELECTION_ACTION_SHEET_KEY as closure_3 } from "GuildFeatures";

const result = require("Header").fileFinishedImporting("modules/premium/native/openPremiumPlanSelectionActionSheet.tsx");

export default function openPremiumPlanSelectionActionSheet(arg0, arg1) {
  if (null == arg1) {
    importDefault(4253).hideActionSheet();
    const obj = importDefault(4253);
  }
  importDefault(4253).openLazy(require(1988) /* asyncRequireImpl */(6808, dependencyMap.paths), closure_3, arg0, arg1);
};
