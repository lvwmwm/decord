// Module ID: 8375
// Function ID: 8376
// Name: openPremiumUpsellActionSheet
// Dependencies: [4271, 8376, 2007, 2]
// Exports: default

// Module 8375 (openPremiumUpsellActionSheet)
const PremiumUpsellActionSheetKey = "PremiumUpsellActionSheetKey";
const result = require("asyncRequireImpl").fileFinishedImporting("modules/premium/roadblocks/native/utils/openPremiumUpsellActionSheet.tsx");

export default function openPremiumUpsellActionSheet(featureName, subfeatureName, analyticsLocations) {
  let obj = importDefault(4271);
  obj = { featureName, subfeatureName, analyticsLocations };
  obj.openLazy(require(2007) /* asyncRequireImpl */(8376, dependencyMap.paths), PremiumUpsellActionSheetKey, obj);
};
export const PREMIUM_UPSELL_ACTION_SHEET_KEY = "PremiumUpsellActionSheetKey";
