// Module ID: 8181
// Function ID: 8182
// Name: openPremiumUpsellActionSheet
// Dependencies: [4253, 8182, 1959, 2]
// Exports: default

// Module 8181 (openPremiumUpsellActionSheet)
const PremiumUpsellActionSheetKey = "PremiumUpsellActionSheetKey";
const result = require("asyncRequireImpl").fileFinishedImporting("modules/premium/roadblocks/native/utils/openPremiumUpsellActionSheet.tsx");

export default function openPremiumUpsellActionSheet(featureName, subfeatureName) {
  let obj = importDefault(4253);
  obj = { featureName, subfeatureName };
  obj.openLazy(require(1959) /* asyncRequireImpl */(8182, dependencyMap.paths), PremiumUpsellActionSheetKey, obj);
};
export const PREMIUM_UPSELL_ACTION_SHEET_KEY = "PremiumUpsellActionSheetKey";
