// Module ID: 8036
// Function ID: 63735
// Name: openPremiumUpsellActionSheet
// Dependencies: [4098, 8037, 1934, 2]
// Exports: default

// Module 8036 (openPremiumUpsellActionSheet)
const result = require("maybeLoadBundle").fileFinishedImporting("modules/premium/roadblocks/native/utils/openPremiumUpsellActionSheet.tsx");

export default function openPremiumUpsellActionSheet(featureName) {
  let obj = importDefault(4098);
  obj = { featureName };
  obj.openLazy(require(1934) /* maybeLoadBundle */(8037, dependencyMap.paths), "PremiumUpsellActionSheetKey", obj);
};
export const PREMIUM_UPSELL_ACTION_SHEET_KEY = "PremiumUpsellActionSheetKey";
