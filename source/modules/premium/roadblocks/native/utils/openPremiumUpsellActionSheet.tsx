// Module ID: 8479
// Function ID: 8480
// Name: openPremiumUpsellActionSheet
// Dependencies: [4342, 8480, 2007, 2]
// Exports: default

// Module 8479 (openPremiumUpsellActionSheet)
const PremiumUpsellActionSheetKey = "PremiumUpsellActionSheetKey";
const result = require("asyncRequireImpl").fileFinishedImporting("modules/premium/roadblocks/native/utils/openPremiumUpsellActionSheet.tsx");

export default function openPremiumUpsellActionSheet(featureName, subfeatureName, analyticsLocations) {
  let obj = importDefault(4342);
  obj = { featureName, subfeatureName, analyticsLocations };
  obj.openLazy(require(2007) /* asyncRequireImpl */(8480, dependencyMap.paths), PremiumUpsellActionSheetKey, obj);
};
export const PREMIUM_UPSELL_ACTION_SHEET_KEY = "PremiumUpsellActionSheetKey";
