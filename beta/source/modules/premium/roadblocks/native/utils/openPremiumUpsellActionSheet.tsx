// Module ID: 7274
// Function ID: 7275
// Name: openPremiumUpsellActionSheet
// Dependencies: [4801, 7275, 1987, 2]
// Exports: default

// Module 7274 (openPremiumUpsellActionSheet)
import asyncRequire from "asyncRequire" /* 1987 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 4801 */;
import size from "module_2" /* 2 */;

const PremiumUpsellActionSheetKey = "PremiumUpsellActionSheetKey";
const result = size.fileFinishedImporting("modules/premium/roadblocks/native/utils/openPremiumUpsellActionSheet.tsx");

export default function openPremiumUpsellActionSheet(featureName, subfeatureName, analyticsLocations, onDismiss, appEntryKey) {
  const obj = ActionSheetActionCreatorsDefault;
  const obj2 = { featureName, subfeatureName, analyticsLocations, onDismiss, appEntryKey };
  obj.openLazy(asyncRequire(7275, dependencyMap.paths), PremiumUpsellActionSheetKey, obj2);
};
export const PREMIUM_UPSELL_ACTION_SHEET_KEY = "PremiumUpsellActionSheetKey";
