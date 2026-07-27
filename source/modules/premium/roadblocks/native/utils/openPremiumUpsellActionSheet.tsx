// Module ID: 6145
// Function ID: 55075
// Name: openPremiumUpsellActionSheet
// Dependencies: [4099, 6146, 1935, 2]
// Exports: default

// Module 6145 (openPremiumUpsellActionSheet)
const result = require("maybeLoadBundle").fileFinishedImporting("modules/premium/roadblocks/native/utils/openPremiumUpsellActionSheet.tsx");

export default function openPremiumUpsellActionSheet(featureName) {
  let obj = importDefault(4099);
  obj = { featureName };
  obj.openLazy(require(1935) /* maybeLoadBundle */(6146, dependencyMap.paths), "PremiumUpsellActionSheetKey", obj);
};
export const PREMIUM_UPSELL_ACTION_SHEET_KEY = "PremiumUpsellActionSheetKey";
