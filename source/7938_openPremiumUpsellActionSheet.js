// Module ID: 7938
// Function ID: 63351
// Name: openPremiumUpsellActionSheet
// Dependencies: [31, 33, 7865, 2]
// Exports: default

// Module 7938 (openPremiumUpsellActionSheet)
import keys from "keys";

const result = keys.fileFinishedImporting("modules/premium/roadblocks/native/utils/openPremiumUpsellActionSheet.tsx");

export default function openPremiumUpsellActionSheet(featureName) {
  let obj = importDefault(dependencyMap[0]);
  obj = { featureName };
  obj.openLazy(require(dependencyMap[2])(dependencyMap[1], dependencyMap.paths), "PremiumUpsellActionSheetKey", obj);
};
export const PREMIUM_UPSELL_ACTION_SHEET_KEY = "PremiumUpsellActionSheetKey";
