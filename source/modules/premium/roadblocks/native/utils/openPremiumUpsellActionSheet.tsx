// Module ID: 7949
// Function ID: 63423
// Name: openPremiumUpsellActionSheet
// Dependencies: [4098, 7950, 1934, 2]
// Exports: default

// Module 7949 (openPremiumUpsellActionSheet)
const result = require("maybeLoadBundle").fileFinishedImporting("modules/premium/roadblocks/native/utils/openPremiumUpsellActionSheet.tsx");

export default function openPremiumUpsellActionSheet(featureName) {
  let obj = importDefault(4098);
  obj = { featureName };
  obj.openLazy(require(1934) /* maybeLoadBundle */(7950, dependencyMap.paths), "PremiumUpsellActionSheetKey", obj);
};
export const PREMIUM_UPSELL_ACTION_SHEET_KEY = "PremiumUpsellActionSheetKey";
