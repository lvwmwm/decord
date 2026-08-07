// Module ID: 6826
// Function ID: 6827
// Name: openPremiumPlanSelectionActionSheet
// Dependencies: [1905, 4270, 6827, 1988, 2]
// Exports: default

// Module 6826 (openPremiumPlanSelectionActionSheet)
import { PREMIUM_PLAN_SELECTION_ACTION_SHEET_KEY as closure_3 } from "GuildFeatures";

const result = require("Header").fileFinishedImporting("modules/premium/native/openPremiumPlanSelectionActionSheet.tsx");

export default function openPremiumPlanSelectionActionSheet(arg0, arg1) {
  if (null == arg1) {
    importDefault(4270).hideActionSheet();
    const obj = importDefault(4270);
  }
  importDefault(4270).openLazy(require(1988) /* asyncRequireImpl */(6827, dependencyMap.paths), closure_3, arg0, arg1);
};
