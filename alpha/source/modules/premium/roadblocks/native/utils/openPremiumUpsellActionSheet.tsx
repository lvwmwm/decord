// Module ID: 9250
// Function ID: 9251
// Name: openPremiumUpsellActionSheet
// Dependencies: [5055, 9251, 2000, 2]
// Exports: default

// Module 9250 (openPremiumUpsellActionSheet)
import asyncRequire from "asyncRequire" /* 2000 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5055 */;
import size from "module_2" /* 2 */;

const PremiumUpsellActionSheetKey = "PremiumUpsellActionSheetKey";
const result = size.fileFinishedImporting("modules/premium/roadblocks/native/utils/openPremiumUpsellActionSheet.tsx");

export default function openPremiumUpsellActionSheet(featureName, analyticsLocations, onDismiss, appEntryKey) {
  const obj = ActionSheetActionCreatorsDefault;
  const obj2 = { featureName, analyticsLocations, onDismiss, appEntryKey };
  obj.openLazy(asyncRequire(9251, dependencyMap.paths), PremiumUpsellActionSheetKey, obj2);
};
export const PREMIUM_UPSELL_ACTION_SHEET_KEY = "PremiumUpsellActionSheetKey";
