// Module ID: 9514
// Function ID: 9515
// Name: openPremiumUpsellActionSheet
// Dependencies: [5118, 9515, 2002, 2]
// Exports: default

// Module 9514 (openPremiumUpsellActionSheet)
import asyncRequire from "asyncRequire" /* 2002 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5118 */;
import size from "module_2" /* 2 */;

const PremiumUpsellActionSheetKey = "PremiumUpsellActionSheetKey";
const result = size.fileFinishedImporting("modules/premium/roadblocks/native/utils/openPremiumUpsellActionSheet.tsx");

export default function openPremiumUpsellActionSheet(featureName, analyticsLocations, onDismiss, appEntryKey) {
  const obj = ActionSheetActionCreatorsDefault;
  const obj2 = { featureName, analyticsLocations, onDismiss, appEntryKey };
  obj.openLazy(asyncRequire(9515, dependencyMap.paths), PremiumUpsellActionSheetKey, obj2);
};
export const PREMIUM_UPSELL_ACTION_SHEET_KEY = "PremiumUpsellActionSheetKey";
