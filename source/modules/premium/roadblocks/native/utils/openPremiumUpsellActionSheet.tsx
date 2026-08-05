// Module ID: 8153
// Function ID: 8154
// Name: openPremiumUpsellActionSheet
// Dependencies: [4223, 8154, 1959, 2]
// Exports: default

// Module 8153 (openPremiumUpsellActionSheet)
const PremiumUpsellActionSheetKey = "PremiumUpsellActionSheetKey";
const result = require("asyncRequireImpl").fileFinishedImporting("modules/premium/roadblocks/native/utils/openPremiumUpsellActionSheet.tsx");

export default function openPremiumUpsellActionSheet(featureName, subfeatureName, analyticsLocations) {
  let obj = importDefault(4223);
  obj = { featureName, subfeatureName, analyticsLocations };
  obj.openLazy(require(1959) /* asyncRequireImpl */(8154, dependencyMap.paths), PremiumUpsellActionSheetKey, obj);
};
export const PREMIUM_UPSELL_ACTION_SHEET_KEY = "PremiumUpsellActionSheetKey";
