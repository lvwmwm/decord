// Module ID: 7943
// Function ID: 63376
// Name: openPremiumUpsellActionSheet
// Dependencies: [31, 33, 7870, 2]
// Exports: default

// Module 7943 (openPremiumUpsellActionSheet)
import result2 from "result2";

const result = result2.fileFinishedImporting("modules/premium/roadblocks/native/utils/openPremiumUpsellActionSheet.tsx");

export default function openPremiumUpsellActionSheet(featureName) {
  let obj = importDefault(dependencyMap[0]);
  obj = { featureName };
  obj.openLazy(require(dependencyMap[2])(dependencyMap[1], dependencyMap.paths), "PremiumUpsellActionSheetKey", obj);
};
export const PREMIUM_UPSELL_ACTION_SHEET_KEY = "PremiumUpsellActionSheetKey";
