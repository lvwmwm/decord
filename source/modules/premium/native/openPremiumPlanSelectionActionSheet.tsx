// Module ID: 6162
// Function ID: 55298
// Name: openPremiumPlanSelectionActionSheet
// Dependencies: [1852, 4099, 6163, 1935, 2]
// Exports: default

// Module 6162 (openPremiumPlanSelectionActionSheet)
import { PREMIUM_PLAN_SELECTION_ACTION_SHEET_KEY as closure_3 } from "GuildFeatures";

const result = require("hasRelevantTrialOfferForOrder").fileFinishedImporting("modules/premium/native/openPremiumPlanSelectionActionSheet.tsx");

export default function openPremiumPlanSelectionActionSheet(arg0, arg1) {
  if (null == arg1) {
    importDefault(4099).hideActionSheet();
    const obj = importDefault(4099);
  }
  importDefault(4099).openLazy(require(1935) /* maybeLoadBundle */(6163, dependencyMap.paths), closure_3, arg0, arg1);
};
