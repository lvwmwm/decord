// Module ID: 8310
// Function ID: 8311
// Name: openPremiumUpsellActionSheet
// Dependencies: [4270, 8311, 1988, 2]
// Exports: default

// Module 8310 (openPremiumUpsellActionSheet)
const PremiumUpsellActionSheetKey = "PremiumUpsellActionSheetKey";
const result = require("asyncRequireImpl").fileFinishedImporting("modules/premium/roadblocks/native/utils/openPremiumUpsellActionSheet.tsx");

export default function openPremiumUpsellActionSheet(featureName, subfeatureName, analyticsLocations) {
  let obj = importDefault(4270);
  obj = { featureName, subfeatureName, analyticsLocations };
  obj.openLazy(require(1988) /* asyncRequireImpl */(8311, dependencyMap.paths), PremiumUpsellActionSheetKey, obj);
};
export const PREMIUM_UPSELL_ACTION_SHEET_KEY = "PremiumUpsellActionSheetKey";
