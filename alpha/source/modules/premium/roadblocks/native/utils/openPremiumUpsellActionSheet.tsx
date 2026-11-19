// Module ID: 8426
// Function ID: 8427
// Name: openPremiumUpsellActionSheet
// Dependencies: [5006, 8427, 2121, 2]
// Exports: default

// Module 8426 (openPremiumUpsellActionSheet)
import asyncRequire from "asyncRequire" /* 2121 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5006 */;
import size from "module_2" /* 2 */;

const PremiumUpsellActionSheetKey = "PremiumUpsellActionSheetKey";
const result = size.fileFinishedImporting("modules/premium/roadblocks/native/utils/openPremiumUpsellActionSheet.tsx");

export default function openPremiumUpsellActionSheet(featureName, analyticsLocations, arg2, appEntryKey) {
  const obj = ActionSheetActionCreatorsDefault;
  const obj2 = { featureName, analyticsLocations, appEntryKey };
  obj.openLazy(asyncRequire(8427, dependencyMap.paths), PremiumUpsellActionSheetKey, obj2, arg2);
};
export const PREMIUM_UPSELL_ACTION_SHEET_KEY = "PremiumUpsellActionSheetKey";
