// Module ID: 6199
// Function ID: 6200
// Name: openPremiumUpsellActionSheet
// Dependencies: [4157, 6200, 1959, 2]
// Exports: default

// Module 6199 (openPremiumUpsellActionSheet)
const PremiumUpsellActionSheetKey = "PremiumUpsellActionSheetKey";
const result = require("asyncRequireImpl").fileFinishedImporting("modules/premium/roadblocks/native/utils/openPremiumUpsellActionSheet.tsx");

export default function openPremiumUpsellActionSheet(featureName) {
  let obj = importDefault(4157);
  obj = { featureName };
  obj.openLazy(require(1959) /* asyncRequireImpl */(6200, dependencyMap.paths), PremiumUpsellActionSheetKey, obj);
};
export const PREMIUM_UPSELL_ACTION_SHEET_KEY = "PremiumUpsellActionSheetKey";
