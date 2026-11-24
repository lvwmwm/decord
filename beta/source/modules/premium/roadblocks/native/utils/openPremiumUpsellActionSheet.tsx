// Module ID: 8545
// Function ID: 8546
// Name: openPremiumUpsellActionSheet
// Dependencies: [5127, 8546, 2119, 2]
// Exports: default

// Module 8545 (openPremiumUpsellActionSheet)
import asyncRequire from "asyncRequire" /* 2119 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5127 */;
import size from "module_2" /* 2 */;

const PremiumUpsellActionSheetKey = "PremiumUpsellActionSheetKey";
const result = size.fileFinishedImporting("modules/premium/roadblocks/native/utils/openPremiumUpsellActionSheet.tsx");

export default function openPremiumUpsellActionSheet(featureName, analyticsLocations, arg2, appEntryKey) {
  const obj = ActionSheetActionCreatorsDefault;
  const obj2 = { featureName, analyticsLocations, appEntryKey };
  obj.openLazy(asyncRequire(8546, dependencyMap.paths), PremiumUpsellActionSheetKey, obj2, arg2);
};
export const PREMIUM_UPSELL_ACTION_SHEET_KEY = "PremiumUpsellActionSheetKey";
