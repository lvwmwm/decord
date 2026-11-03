// Module ID: 10744
// Function ID: 10745
// Name: openGiftingBadgeInfoActionSheet
// Dependencies: [5381, 10745, 2123, 2]
// Exports: default

// Module 10744 (openGiftingBadgeInfoActionSheet)
import asyncRequire from "asyncRequire" /* 2123 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5381 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/premium/gifting/native/openGiftingBadgeInfoActionSheet.tsx");

export default function openGiftingBadgeInfoActionSheet() {
  const obj = ActionSheetActionCreatorsDefault;
  obj.openLazy(asyncRequire(10745, dependencyMap.paths), "GiftingBadgeInfoActionSheet");
};
