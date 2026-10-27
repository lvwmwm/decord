// Module ID: 9682
// Function ID: 9683
// Name: openPremiumUpsellActionSheet
// Dependencies: [5211, 9683, 1999, 2]
// Exports: default

// Module 9682 (openPremiumUpsellActionSheet)
import asyncRequire from "asyncRequire" /* 1999 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5211 */;
import size from "module_2" /* 2 */;

const PremiumUpsellActionSheetKey = "PremiumUpsellActionSheetKey";
const result = size.fileFinishedImporting("modules/premium/roadblocks/native/utils/openPremiumUpsellActionSheet.tsx");

export default function openPremiumUpsellActionSheet(featureName, analyticsLocations, onDismiss, appEntryKey) {
  const obj = ActionSheetActionCreatorsDefault;
  const obj2 = { featureName, analyticsLocations, onDismiss, appEntryKey };
  obj.openLazy(asyncRequire(9683, dependencyMap.paths), PremiumUpsellActionSheetKey, obj2);
};
export const PREMIUM_UPSELL_ACTION_SHEET_KEY = "PremiumUpsellActionSheetKey";
