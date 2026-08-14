// Module ID: 8440
// Function ID: 8441
// Name: openPremiumUpsellActionSheet
// Dependencies: [4310, 8441, 2007, 2]
// Exports: default

// Module 8440 (openPremiumUpsellActionSheet)
const PremiumUpsellActionSheetKey = "PremiumUpsellActionSheetKey";
const result = require("asyncRequireImpl").fileFinishedImporting("modules/premium/roadblocks/native/utils/openPremiumUpsellActionSheet.tsx");

export default function openPremiumUpsellActionSheet(featureName, subfeatureName, analyticsLocations) {
  let obj = importDefault(4310);
  obj = { featureName, subfeatureName, analyticsLocations };
  obj.openLazy(require(2007) /* asyncRequireImpl */(8441, dependencyMap.paths), PremiumUpsellActionSheetKey, obj);
};
export const PREMIUM_UPSELL_ACTION_SHEET_KEY = "PremiumUpsellActionSheetKey";
