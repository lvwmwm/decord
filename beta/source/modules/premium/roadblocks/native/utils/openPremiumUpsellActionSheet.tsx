// Module ID: 8130
// Function ID: 8131
// Name: openPremiumUpsellActionSheet
// Dependencies: [4757, 8131, 1984, 2]
// Exports: default

// Module 8130 (openPremiumUpsellActionSheet)
import asyncRequireImpl from "asyncRequireImpl" /* 1984 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 4757 */;
import size from "module_2" /* 2 */;

const PremiumUpsellActionSheetKey = "PremiumUpsellActionSheetKey";
const result = size.fileFinishedImporting("modules/premium/roadblocks/native/utils/openPremiumUpsellActionSheet.tsx");

export default function openPremiumUpsellActionSheet(featureName, subfeatureName, analyticsLocations, onDismiss, appEntryKey) {
  ActionSheetActionCreatorsDefault.openLazy(asyncRequireImpl(8131, dependencyMap.paths), PremiumUpsellActionSheetKey, { featureName, subfeatureName, analyticsLocations, onDismiss, appEntryKey });
};
export const PREMIUM_UPSELL_ACTION_SHEET_KEY = "PremiumUpsellActionSheetKey";
