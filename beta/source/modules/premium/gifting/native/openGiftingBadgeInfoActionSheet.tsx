// Module ID: 10766
// Function ID: 10767
// Name: openGiftingBadgeInfoActionSheet
// Dependencies: [5406, 10767, 2118, 2]
// Exports: default

// Module 10766 (openGiftingBadgeInfoActionSheet)
import asyncRequire from "asyncRequire" /* 2118 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5406 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/premium/gifting/native/openGiftingBadgeInfoActionSheet.tsx");

export default function openGiftingBadgeInfoActionSheet() {
  const obj = ActionSheetActionCreatorsDefault;
  obj.openLazy(asyncRequire(10767, dependencyMap.paths), "GiftingBadgeInfoActionSheet");
};
