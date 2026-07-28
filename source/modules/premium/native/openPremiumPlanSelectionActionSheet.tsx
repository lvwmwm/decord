// Module ID: 6196
// Function ID: 55417
// Name: openPremiumPlanSelectionActionSheet
// Dependencies: [1852, 4133, 6197, 1935, 2]
// Exports: default

// Module 6196 (openPremiumPlanSelectionActionSheet)
import { PREMIUM_PLAN_SELECTION_ACTION_SHEET_KEY as closure_3 } from "GuildFeatures";

const result = require("hasRelevantTrialOfferForOrder").fileFinishedImporting("modules/premium/native/openPremiumPlanSelectionActionSheet.tsx");

export default function openPremiumPlanSelectionActionSheet(arg0, arg1) {
  if (null == arg1) {
    importDefault(4133).hideActionSheet();
    const obj = importDefault(4133);
  }
  importDefault(4133).openLazy(require(1935) /* maybeLoadBundle */(6197, dependencyMap.paths), closure_3, arg0, arg1);
};
