// Module ID: 8293
// Function ID: 8294
// Name: openPremiumUpsellActionSheet
// Dependencies: [4253, 8294, 1988, 2]
// Exports: default

// Module 8293 (openPremiumUpsellActionSheet)
const PremiumUpsellActionSheetKey = "PremiumUpsellActionSheetKey";
const result = require("asyncRequireImpl").fileFinishedImporting("modules/premium/roadblocks/native/utils/openPremiumUpsellActionSheet.tsx");

export default function openPremiumUpsellActionSheet(featureName, subfeatureName, analyticsLocations) {
  let obj = importDefault(4253);
  obj = { featureName, subfeatureName, analyticsLocations };
  obj.openLazy(require(1988) /* asyncRequireImpl */(8294, dependencyMap.paths), PremiumUpsellActionSheetKey, obj);
};
export const PREMIUM_UPSELL_ACTION_SHEET_KEY = "PremiumUpsellActionSheetKey";
