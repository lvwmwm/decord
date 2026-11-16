// Module ID: 9916
// Function ID: 9917
// Name: openPremiumUpsellActionSheet
// Dependencies: [5406, 9917, 2118, 2]
// Exports: default

// Module 9916 (openPremiumUpsellActionSheet)
import asyncRequire from "asyncRequire" /* 2118 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5406 */;
import size from "module_2" /* 2 */;

const PremiumUpsellActionSheetKey = "PremiumUpsellActionSheetKey";
const result = size.fileFinishedImporting("modules/premium/roadblocks/native/utils/openPremiumUpsellActionSheet.tsx");

export default function openPremiumUpsellActionSheet(featureName, analyticsLocations, onDismiss, appEntryKey) {
  const obj = ActionSheetActionCreatorsDefault;
  const obj2 = { featureName, analyticsLocations, onDismiss, appEntryKey };
  obj.openLazy(asyncRequire(9917, dependencyMap.paths), PremiumUpsellActionSheetKey, obj2);
};
export const PREMIUM_UPSELL_ACTION_SHEET_KEY = "PremiumUpsellActionSheetKey";
