// Module ID: 10458
// Function ID: 10459
// Name: openGiftingBadgeInfoActionSheet
// Dependencies: [5192, 10459, 2002, 2]
// Exports: default

// Module 10458 (openGiftingBadgeInfoActionSheet)
import asyncRequire from "asyncRequire" /* 2002 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5192 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/premium/gifting/native/openGiftingBadgeInfoActionSheet.tsx");

export default function openGiftingBadgeInfoActionSheet() {
  const obj = ActionSheetActionCreatorsDefault;
  obj.openLazy(asyncRequire(10459, dependencyMap.paths), "GiftingBadgeInfoActionSheet");
};
