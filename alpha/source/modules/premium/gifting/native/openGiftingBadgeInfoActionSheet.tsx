// Module ID: 10751
// Function ID: 10752
// Name: openGiftingBadgeInfoActionSheet
// Dependencies: [5404, 10752, 2118, 2]
// Exports: default

// Module 10751 (openGiftingBadgeInfoActionSheet)
import asyncRequire from "asyncRequire" /* 2118 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5404 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/premium/gifting/native/openGiftingBadgeInfoActionSheet.tsx");

export default function openGiftingBadgeInfoActionSheet() {
  const obj = ActionSheetActionCreatorsDefault;
  obj.openLazy(asyncRequire(10752, dependencyMap.paths), "GiftingBadgeInfoActionSheet");
};
