// Module ID: 9595
// Function ID: 9596
// Name: openPremiumUpsellActionSheet
// Dependencies: [5257, 9596, 2120, 2]
// Exports: default

// Module 9595 (openPremiumUpsellActionSheet)
import asyncRequire from "asyncRequire" /* 2120 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5257 */;
import size from "module_2" /* 2 */;

const PremiumUpsellActionSheetKey = "PremiumUpsellActionSheetKey";
const result = size.fileFinishedImporting("modules/premium/roadblocks/native/utils/openPremiumUpsellActionSheet.tsx");

export default function openPremiumUpsellActionSheet(featureName, analyticsLocations, arg2, appEntryKey) {
  const obj = ActionSheetActionCreatorsDefault;
  const obj2 = { featureName, analyticsLocations, appEntryKey };
  obj.openLazy(asyncRequire(9596, dependencyMap.paths), PremiumUpsellActionSheetKey, obj2, arg2);
};
export const PREMIUM_UPSELL_ACTION_SHEET_KEY = "PremiumUpsellActionSheetKey";
