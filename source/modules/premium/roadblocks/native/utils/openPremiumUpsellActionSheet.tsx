// Module ID: 8370
// Function ID: 8371
// Name: openPremiumUpsellActionSheet
// Dependencies: [4271, 8371, 1988, 2]
// Exports: default

// Module 8370 (openPremiumUpsellActionSheet)
const PremiumUpsellActionSheetKey = "PremiumUpsellActionSheetKey";
const result = require("asyncRequireImpl").fileFinishedImporting("modules/premium/roadblocks/native/utils/openPremiumUpsellActionSheet.tsx");

export default function openPremiumUpsellActionSheet(featureName, subfeatureName, analyticsLocations) {
  let obj = importDefault(4271);
  obj = { featureName, subfeatureName, analyticsLocations };
  obj.openLazy(require(1988) /* asyncRequireImpl */(8371, dependencyMap.paths), PremiumUpsellActionSheetKey, obj);
};
export const PREMIUM_UPSELL_ACTION_SHEET_KEY = "PremiumUpsellActionSheetKey";
