// Module ID: 6179
// Function ID: 55194
// Name: openPremiumUpsellActionSheet
// Dependencies: [4133, 6180, 1935, 2]
// Exports: default

// Module 6179 (openPremiumUpsellActionSheet)
const result = require("maybeLoadBundle").fileFinishedImporting("modules/premium/roadblocks/native/utils/openPremiumUpsellActionSheet.tsx");

export default function openPremiumUpsellActionSheet(featureName) {
  let obj = importDefault(4133);
  obj = { featureName };
  obj.openLazy(require(1935) /* maybeLoadBundle */(6180, dependencyMap.paths), "PremiumUpsellActionSheetKey", obj);
};
export const PREMIUM_UPSELL_ACTION_SHEET_KEY = "PremiumUpsellActionSheetKey";
