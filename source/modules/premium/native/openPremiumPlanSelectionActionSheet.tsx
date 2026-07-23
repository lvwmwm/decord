// Module ID: 6661
// Function ID: 51236
// Name: openPremiumPlanSelectionActionSheet
// Dependencies: [1851, 4098, 6662, 1934, 2]
// Exports: default

// Module 6661 (openPremiumPlanSelectionActionSheet)
import { PREMIUM_PLAN_SELECTION_ACTION_SHEET_KEY as closure_3 } from "GuildFeatures";

const result = require("hasRelevantTrialOfferForOrder").fileFinishedImporting("modules/premium/native/openPremiumPlanSelectionActionSheet.tsx");

export default function openPremiumPlanSelectionActionSheet(arg0, arg1) {
  if (null == arg1) {
    importDefault(4098).hideActionSheet();
    const obj = importDefault(4098);
  }
  importDefault(4098).openLazy(require(1934) /* maybeLoadBundle */(6662, dependencyMap.paths), closure_3, arg0, arg1);
};
