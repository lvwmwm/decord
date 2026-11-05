// Module ID: 10799
// Function ID: 10800
// Name: openGiftingBadgeInfoActionSheet
// Dependencies: [5384, 10800, 2123, 2]
// Exports: default

// Module 10799 (openGiftingBadgeInfoActionSheet)
import asyncRequire from "asyncRequire" /* 2123 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5384 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/premium/gifting/native/openGiftingBadgeInfoActionSheet.tsx");

export default function openGiftingBadgeInfoActionSheet() {
  const obj = ActionSheetActionCreatorsDefault;
  obj.openLazy(asyncRequire(10800, dependencyMap.paths), "GiftingBadgeInfoActionSheet");
};
