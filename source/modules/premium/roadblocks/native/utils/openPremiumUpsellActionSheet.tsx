// Module ID: 8414
// Function ID: 8415
// Name: openPremiumUpsellActionSheet
// Dependencies: [4312, 8415, 2007, 2]
// Exports: default

// Module 8414 (openPremiumUpsellActionSheet)
const PremiumUpsellActionSheetKey = "PremiumUpsellActionSheetKey";
const result = require("asyncRequireImpl").fileFinishedImporting("modules/premium/roadblocks/native/utils/openPremiumUpsellActionSheet.tsx");

export default function openPremiumUpsellActionSheet(featureName, subfeatureName, analyticsLocations) {
  let obj = importDefault(4312);
  obj = { featureName, subfeatureName, analyticsLocations };
  obj.openLazy(require(2007) /* asyncRequireImpl */(8415, dependencyMap.paths), PremiumUpsellActionSheetKey, obj);
};
export const PREMIUM_UPSELL_ACTION_SHEET_KEY = "PremiumUpsellActionSheetKey";
